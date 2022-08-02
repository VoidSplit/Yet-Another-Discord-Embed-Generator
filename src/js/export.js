import nunjucks from 'nunjucks'
const templates = require('./templates/export/*.njk')

export function getSyntaxes() {
    let contents = templates.default
    let filenames = templates.filenames
    let syntaxes = {}

    for (let i = 0; i < contents.length; i++) {
        const lang = filenames[i].match(/\.\/templates\/export\/(.*)\.njk/)[1]
        syntaxes[lang] = contents[i].default
    }

    return syntaxes
}

export function export_(language, embed) {
    const env = nunjucks.configure({
        autoescape: false,
        trimBlocks: true,
        lstripBlocks: true,
    })

    env.addFilter("section", (e) => { return e })

    env.addFilter("join_array", (arr, del1, del2) => {
        arr = arr.map(x => Object.values(x))
        arr = arr.map(x => x.join(del1))
        return arr.join(del2)
    })

    const syntaxes = getSyntaxes()

    return env.renderString(syntaxes[language], embed)
}
