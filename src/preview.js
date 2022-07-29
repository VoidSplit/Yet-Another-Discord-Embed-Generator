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
        element.href = value
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

function preview(embed) {
    putText("title", embed.title || "Some title")
    putText("description", embed.description || "Some description")
    setLinkUrl("url", embed.url || "resources/images/default profile picture.png")
    putText("timestamp", embed.timestamp || "Some timestamp")
    setLineColor("color", embed.color || "#ffa600")

    putText("footer_text", embed.footer.text || "Some footer text")

    setImgSrc("image", embed.image.url || "resources/images/default profile picture.png")

    setImgSrc("thumbnail", embed.thumbnail.url || "resources/images/default profile picture.png")

    putText("author_name", embed.author.name || "Some author name")
    setImgSrc("author_icon", embed.author.icon_url || "resources/images/default profile picture.png")
}

export default {
    preview: preview
}
