import form from './form.js'

document.getElementById("test_button").addEventListener("click", (e) => {
    console.log("Test")
    console.log(form.getEmbed())
})
