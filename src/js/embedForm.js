import nunjucks from 'nunjucks'

import * as preview from './preview.js'

import { Embed } from './data/embed.js'
import { Author } from './data/author.js'
import { Footer } from './data/footer.js'
import { Image } from './data/image.js'
import { Provider } from './data/provider.js'
import { Thumbnail } from './data/thumbnail.js'
import { Video } from './data/video.js'
import { Field } from './data/field.js'

import formTemplateFuns from '../html/include/form.njk'

export class EmbedForm {
    constructor(selector) {
        this.element = document.querySelector(selector)

        this.element.addEventListener("input", (event) => {
            this.preview()
        })

        this.element.querySelector("#form_add_field").addEventListener("click", (event) => {
            this.addField()
        })

        this.element.querySelectorAll("input[type='text'][data-maxlength]").forEach((e) => {
            e.addEventListener("input", (event) => {
                const chars = e.value.length
                const maxlength = e.getAttribute("data-maxlength")*1
                if (chars > maxlength) {
                    console.log(`${e.id}_extra_chars`)
                    this.element.querySelector(`#${e.id}_extra_chars`).innerText = `${maxlength - chars}`
                }
            })
        })
    }

    addField() {
        const fields_element = this.element.querySelector("#fields_wrapper")

        if (fields_element.children.length < 25) {
            let div = document.createElement("div")

            div.id = "input_fields"
            div.class = "field_line"
            
            div.innerHTML = nunjucks.renderString(formTemplateFuns + `
                <div class="field_line" id="input_fields">
                {{ input("text", "name", null, "name", 256) }}
                {{ input("text", "value", null, "value", 1024) }}
                    <div class="checkbox">
                        <input type="checkbox" name="" id="input_inline">
                        <label>Inline</label>
                    </div>
                    <button class="btn red" onclick="this.parentNode.parentNode.remove()">Delete</button>
                </div>
            `)

            fields_element.appendChild(div)
        }
    }

    getEmbed() {
        function getElement(id, parent=document) {
            let element = parent.querySelector(`#input_${id}`)
            return element
        }
        
        function get(id, parent=document) {
            let element = getElement(id, parent)
            if (element) {
                return element.value
            }
            return null
        }
        
        function getTimestamp() {
            let auto = getElement("timestamp_auto").checked
            if (auto) {
                return "__AUTO__"
            } else {
                let timestamp = getElement("timestamp")
                if (timestamp) {
                    if (timestamp.value) {
                        return new Date(timestamp.value).toISOString()
                    }
                }
            }
        }
        
        function getFields() {
            let fields = []
            const children = document.getElementById("fields_wrapper").children
            for (let i = 0; i < children.length; i++) {
                fields.push(new Field(
                    get("name", children[i]),
                    get("value", children[i]),
                    getElement("inline", children[i]).checked,
                ))
            }
            return fields
        }

        return new Embed(
            get("title"),
            get("type"),
            get("description"),
            get("url"),
            getTimestamp(),
            get("color"),
            new Footer(
                get("footer_text"),
                get("footer_icon_url"),
                get("footer_proxy_icon_url"),
            ),
            new Image(
                get("image_url"),
                get("image_proxy_url"),
                get("image_height"),
                get("image_width"),
            ),
            new Thumbnail(
                get("thumbnail_url"),
                get("thumbnail_proxy_url"),
                get("thumbnail_height"),
                get("thumbnail_width"),
            ),
            new Video(
                get("video_url"),
                get("video_proxy_url"),
                get("video_height"),
                get("video_width"),
            ),
            new Provider(
                get("provider_name"),
                get("provider_url"),
            ),
            new Author(
                get("author_name"),
                get("author_url"),
                get("author_icon_url"),
                get("author_proxy_icon_url"),
            ),
            getFields(),
        )
    }

    preview() {
        preview.preview(this.getEmbed())
    }

    export() {
        
    }
}
