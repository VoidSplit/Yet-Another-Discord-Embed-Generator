export class Author {
    constructor(
        name,
        url,
        icon_url,
        proxy_icon_url,
    ) {
        this.name = name || null
        this.url = url || null
        this.icon_url = icon_url || null
        this.proxy_icon_url = proxy_icon_url || null
    }
}
