import form from './form.js'
import preview from './preview.js'
import form_ui from './form_ui.js'

import exp from './export.js'

document.getElementById("test_button").addEventListener("click", (e) => {
    const embed = form.getEmbed()
    console.log(embed)
    preview.preview(embed)
    console.log(exp.python(embed))
})

window.addField = form_ui.addField
