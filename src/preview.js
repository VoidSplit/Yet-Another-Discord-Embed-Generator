function getElement(id, callback) {
    const element = document.getElementById(`preview_${id}`)
    if (element) {
        callback(element)
    } else {
        return false
    }
}

function putText(id, value) {
    getElement(id, (element) => {
        element.innerText = value
    })
}

function setLinkUrl(id, value) {
    getElement(id, (element) => {
        if (value) {
            element.href = value
        } else {
            element.removeAttribute("href")
        }
    })
}

function setImgSrc(id, value) {
    getElement(id, (element) => {
        element.src = value
    })
}

function setLineColor(id, value) {
    getElement(id, (element) => {
        element.style.backgroundColor = value
    })
}

function previewFields(fields) {
    document.getElementById("fields").innerHTML = ""
    if (fields.length > 0) {
        let zone = null
        fields.forEach((field) => {
            if (!zone || !field.inline) {
                zone = document.createElement("div")
                zone.classList.add("field_zone")
            }
            
            let field_div = document.createElement("div")
            field_div.classList.add("field")

            field_div.innerHTML = `
                <div class="field_name">${field.name}</div>
                <div class="field_value">${field.value}</div>
            `

            zone.appendChild(field_div)
            document.getElementById("fields").appendChild(zone)

            if (!field.inline) {
                zone = null
            }
        })
    }
}

export function preview(embed) {
    putText("title", embed.title || "Some title")
    putText("description", embed.description || "Some description")
    setLinkUrl("url", embed.url)
    putText("timestamp", embed.timestamp || "Some timestamp")
    setLineColor("color", embed.color || "#ffa600")

    putText("footer_text", embed.footer.text || "Some footer text")
    setImgSrc("footer_icon", embed.footer.icon_url || "resources/images/default profile picture.png")

    setImgSrc("image", embed.image.url || "resources/images/default profile picture.png")

    setImgSrc("thumbnail", embed.thumbnail.url || "resources/images/default profile picture.png")

    putText("author_name", embed.author.name || "Some author name")
    setImgSrc("author_icon", embed.author.icon_url || "resources/images/default profile picture.png")

    previewFields(embed.fields)
}
