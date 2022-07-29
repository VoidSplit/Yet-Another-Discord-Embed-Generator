export class Field {
    constructor(
        name,
        value,
        inline,
    ) {
        this.name = name || nnull
        this.value = value || null
        this.inline = inline || null
    }
}
