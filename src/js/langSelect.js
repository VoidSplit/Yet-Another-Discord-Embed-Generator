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

        Object.entries(exp.getSyntaxes()).forEach(([k, v]) => {
            let option = document.createElement("option")
            option.text = `${v.lang} (${v.lib})`
            option.value = k
            this.sel.append(option)
        })
    }

    get() {
        return this.sel.value
    }
}
