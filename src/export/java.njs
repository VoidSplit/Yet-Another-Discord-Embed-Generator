EmbedBuilder embed = new EmbedBuilder()
{##}

    {%- if title %}
    .setTitle("{{ title }}", null)
    {% endif %}

    {%- if description %}
    .setDescription("{{ description }}")
    {% endif %}

    {%- if color %}
    .setColor("{{ color }}")
    {% endif %}

    {%- if footer.text or footer.icon_url %}
    .setFooter("{{ footer.text }}", "{{ footer.icon_url }}")
    {% endif %}

    {%- for field in fields %}
    {%- if field.name or field.value %}
    .addField("{{ field.name }}", "{{ field.value }}", {{ 'true' if field.inline else 'false' }})
    {% endif %}
    {% endfor %}
