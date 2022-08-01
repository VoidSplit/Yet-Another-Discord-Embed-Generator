EmbedBuilder embed = new EmbedBuilder()
{##}

    {%- if title %}
    .setTitle("{{ title }}")
    {% endif %}

    {%- if description %}
    .setDescription("{{ description }}")
    {% endif %}

    {%- if author.name or author.icon_url %}
    .setAuthor("{{ author.name }}", "{{ author.url }}", "{{ author.icon_url }}")
    {% endif %}

    {%- if color %}
    .setColor("{{ color }}")
    {% endif %}

    {%- if footer.text or footer.icon_url %}
    .setFooter("{{ footer.text }}", "{{ footer.icon_url }}")
    {% endif %}

    {%- for field in fields %}
    {%- if field.name or field.value %}
    .add{{ 'Inline' if field.inline }}Field("{{ field.name }}", "{{ field.value }}")
    {% endif %}
    {% endfor %}
