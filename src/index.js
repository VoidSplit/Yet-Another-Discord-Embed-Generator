import form from './form.js'
import preview from './preview.js'

document.getElementById("test_button").addEventListener("click", (e) => {
    const embed = form.getEmbed()
    console.log(embed)
    preview.preview(embed)
})
