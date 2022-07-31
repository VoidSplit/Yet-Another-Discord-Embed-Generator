import form from './form.js'
import preview from './preview.js'
import form_ui from './form_ui.js'

import { export_ } from './export.js'

document.getElementById("test_button").addEventListener("click", (e) => {
    const embed = form.getEmbed()
    console.log(embed)
    preview.preview(embed)
    console.log(export_("python", embed))
})

window.addField = form_ui.addField
