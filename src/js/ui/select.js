import customSelect from 'custom-select'

const cstSel = customSelect("#export_select", {
    containerClass: "select",
    openerClass: "view",
    panelClass: "categories",
    optionClass: "cat",
    isDisabledClass: "disabled",
    isOpenClass: "open"
})[0]

export function populate(options) {
    cstSel.empty()
    cstSel.append(
        Object.entries(options).map(([k, v]) => {
            let option = document.createElement("option")
            option.value = k
            option.text = v
            return option
        })
    )
}

export function get() {
    return cstSel.value
}
