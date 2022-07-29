export class Video {
    constructor(
        url,
        proxy_url,
        height,
        width,
    ) {
        this.url = url || null
        this.proxy_url = proxy_url || null
        this.height = height || null
        this.width = width || null
    }
}
