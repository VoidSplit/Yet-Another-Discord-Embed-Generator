function addField() {
    const fields_element = document.getElementById("fields_wrapper")

    if (fields_element.children.length < 25) {
        let div = document.createElement("div")

        div.id = "input_fields"
        div.class = "field_line"
        
        div.innerHTML = `
            <div class="field_line" id="input_fields">
                <input type="text" placeholder="name" id="input_name" maxlength="256">
                <input type="text" placeholder="value" id="input_value" maxlength="1024">
                <div class="checkbox">
                    <input type="checkbox" name="" id="input_inline">
                    <label>Inline</label>
                </div>
                <button class="btn red" onclick="this.parentNode.parentNode.remove()">Delete</button>
            </div>
        `
        fields_element.appendChild(div)
    }
}

window.addField = addField
