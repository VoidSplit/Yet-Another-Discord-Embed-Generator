import template from './templates/preview.njk'
import nunjucks from 'nunjucks'

export function preview(embed) {
    const env = nunjucks.configure({
        autoescape: false,
        trimBlocks: true,
        lstripBlocks: true,
    })

    env.addFilter("timestamp", (timestamp) => {
        let date = null

        if (timestamp == "__AUTO__") {
            date = new Date(Date.now())
        } else {
            date = new Date(timestamp)
        }

        let month = date.getMonth().toString().padStart(2, "0")
        let day = date.getDate().toString().padStart(2, "0")
        let year = date.getFullYear()

        return `${month}/${day}/${year}`
    })

    document.getElementById("preview").innerHTML = env.renderString(template, embed)
}
