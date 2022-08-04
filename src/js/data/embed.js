import { Author } from './author.js'
import { Footer } from './footer.js'
import { Image } from './image.js'
import { Provider } from './provider.js'
import { Thumbnail } from './thumbnail.js'
import { Video } from './video.js'

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
