import { Embed } from './data/embed'

import { Author } from './data/author'
import { Footer } from './data/footer'
import { Image } from './data/image'
import { Provider } from './data/provider'
import { Thumbnail } from './data/thumbnail'
import { Video } from './data/video'
import { Field } from './data/field'

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
            return new Date(timestamp.value).toISOString()
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

export function getEmbed() {
    console.log(getTimestamp())
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
