import template from './templates/preview.njk'
import nunjucks from 'nunjucks'
import * as markdown from 'discord-markdown'

import { HighlightJS } from 'highlight.js'
import './hljs.css'

HighlightJS.configure({languages:[]})

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

    env.addFilter("fieldZones", (fields) => {
        let zones = []
        let cur = -1

        fields.forEach((field) => {
            if (field.inline) {
                if (cur == -1) {
                    cur = zones.push([]) - 1
                } else {
                    if (zones[cur].length >= 4) {
                        cur = zones.push([]) - 1
                    }
                }
                zones[cur].push(field)
            } else {
                zones.push([field])
                cur = -1
            }
        })
        
        return zones
    })

    env.addFilter("markdown", (text) => {
        if (text) {
            return markdown.toHTML(text, {
                embed: true
            })
        } else {
            return ""
        }
    })

    document.getElementById("preview").innerHTML = env.renderString(template, embed)

    HighlightJS.highlightAll()
}
