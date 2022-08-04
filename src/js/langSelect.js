import customSelect from 'custom-select'

import * as exp from './export.js'

export class LangSelect {
    constructor(selector) {
        this.sel = customSelect(selector, {
            containerClass: "select",
            openerClass: "view",
            panelClass: "categories",
            optionClass: "cat",
            isDisabledClass: "disabled",
            isOpenClass: "open"
        })[0]

        this.sel.empty()

        Object.keys(exp.getSyntaxes()).forEach((e) => {
            let option = document.createElement("option")
            option.text = e
            option.value = e
            this.sel.append(option)
        })
    }

    get() {
        return this.sel.value
    }
}
