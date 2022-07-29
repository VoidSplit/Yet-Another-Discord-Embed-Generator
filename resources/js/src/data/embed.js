import { Author } from './author'
import { Footer } from './footer'
import { Image } from './image'
import { Provider } from './provider'
import { Thumbnail } from './thumbnail'
import { Video } from './video'

export class Embed {
    constructor(
        title,
        type,
        description,
        url,
        timestamp,
        color,
        footer,
        image,
        thumbnail,
        video,
        provider,
        author,
        fields,
    ) {
        this.title = title || null
        this.type = type || null
        this.description = description || null
        this.url = url || null
        this.timestamp = timestamp || null
        this.color = color || null
        this.footer = footer || new Footer()
        this.image = image || new Image()
        this.thumbnail = thumbnail || new Thumbnail()
        this.video = video || new Video()
        this.provider = provider || new Provider()
        this.author = author || new Author()
        this.fields = fields || []
    }
}
