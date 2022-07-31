import * as templates from './export/templates.js'
import nunjucks from 'nunjucks'

export function export_(language, embed) {
    const env = nunjucks.configure({
        autoescape: false,
        trimBlocks: true,
        lstripBlocks: true,
    })

    env.addFilter("join_array", (arr, del1, del2) => {
        arr = arr.map(x => Object.values(x))
        arr = arr.map(x => x.join(del1))
        return arr.join(del2)
    })

    return env.renderString(templates[language], embed)
}
