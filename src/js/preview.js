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

        let day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()]
        let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][date.getMonth()]
        let dayNo = date.getDate()
        let year = date.getFullYear()

        let hours = date.getHours()
        let minutes = date.getMinutes()
        let meridiem = "AM"

        if (hours > 12) {
            hours -= 12
            meridiem = "PM"
        }

        return `${day} ${month} ${dayNo}, ${year} at ${hours}:${minutes.toString().padStart(2, '0')} ${meridiem}`
    })

    document.getElementById("preview").innerHTML = env.renderString(template, embed)
}
