import * as form from './form.js'
import * as form_ui from './ui/form.js'
import * as preview from './preview.js'
import * as select from './ui/select.js'
import * as exp from './export.js'

let options = {}
Object.keys(exp.getSyntaxes()).forEach((e) => {
    options[e] = e
})
select.populate(options)

document.getElementById("embed_form").addEventListener("input", (event) => {
    const embed = form.getEmbed()
    preview.preview(embed)
})

window.exp = () => {
    const embed = form.getEmbed()
    const syntax = select.get()
    const code = exp.export_(syntax, embed)
    document.getElementById("out").innerText = code
}

preview.preview(form.getEmbed())

window.addField = form_ui.addField
