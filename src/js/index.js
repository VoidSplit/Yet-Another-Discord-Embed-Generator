import { HighlightJS } from 'highlight.js'
import './hljs.css'

import * as exp from './export.js'

import { EmbedForm } from './embedForm.js'
import { LangSelect } from './langSelect.js'

const langSelect = new LangSelect("#export_select")

const embedForm = new EmbedForm("#embed_form")
embedForm.preview()

window.exp = () => {
    const embed = embedForm.getEmbed()
    const syntax = langSelect.get()
    const code = exp.export_(syntax, embed)
    const out = document.querySelector("#out")

    out.textContent = code
    out.classList = ["hljs", `language-${syntax}`]
    
    HighlightJS.highlightAll()
}
