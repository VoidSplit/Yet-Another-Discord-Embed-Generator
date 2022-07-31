import python_template from './export/python.njs'
import nunjucks from 'nunjucks'

function python(embed) {
    const env = nunjucks.configure({
        autoescape: false,
        trimBlocks: true,
        lstripBlocks: true,
    })

    env.addFilter("join_array", (arr, del1, del2) => {
        arr = arr.map(x => Object.values(x))
        arr = arr.map(x => x.join(del2))
        return arr.join(del1)
    })

    return env.renderString(python_template, embed)
}

export default {
    python: python
}
