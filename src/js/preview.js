import template from './preview.njs'
import nunjucks from 'nunjucks'

export function preview(embed) {
    const env = nunjucks.configure({
        autoescape: false,
        trimBlocks: true,
        lstripBlocks: true,
    })

    console.log(embed)

    document.getElementById("preview").innerHTML = env.renderString(template, embed)
}
