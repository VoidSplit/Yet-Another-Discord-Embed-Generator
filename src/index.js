import form from './form.js'
import preview from './preview.js'
import form_ui from './ui/form.js'
import * as select from './ui/select.js'
import * as templates from './export/templates.js'

import { export_ } from './export.js'

let syntaxes = {}
Object.keys(templates).forEach((e) => {
    syntaxes[e] = e
})

select.populate(syntaxes)

window.exp = () => {
    const embed = form.getEmbed()
    const syntax = select.get()
    const code = export_(syntax, embed)
    document.getElementById("out").innerText = code
}

window.addField = form_ui.addField
