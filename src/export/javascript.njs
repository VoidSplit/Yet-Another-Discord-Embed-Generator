{%- macro fun(func, parameter) -%}
{%- if parameter %}
    {{ func }}({{ parameter }})
{% endif %}
{%- endmacro -%}

{%- macro dict(params, del=", ") -%}
    {%- set params = params | selectattr("value") -%}
    { {% for param in params -%}
        {{ param.name }}: {{ '"' if not param.no_quotes }}{{ param.value }}{{ '"' if not param.no_quotes }}{{ del if not loop.last }}
    {%- endfor %} }
{%- endmacro -%}

const embed = new EmbedBuilder()
{##}
    {%- if color %}
    .setColor("{{ color }}")
    {% endif %}

    {%- if title %}
    .setTitle("{{ title }}")
    {% endif %}
    
    {%- if url %}
    .setURL("{{ url }}")
    {% endif %}

    {%- if author.name or author.icon_url %}
    .setAuthor({{ dict([
        { name: "name", value: author.name },
        { name: "iconURL", value: author.icon_url },
        { name: "url", value: author.url }
    ]) }})
    {% endif %}

    {%- if description %}
    .setDescription("{{ description }}")
    {% endif %}

    {%- if thumbnail.url %}
    .setThumbnail("{{ thumbnail.url }}")
    {% endif %}

    {%- if image.url %}
    .setImage("{{ image.url }}")
    {% endif %}

    {%- if footer.text or footer.icon_url %}
    .setFooter({{ dict([
        { name: "text", value: footer.text },
        { name: "iconURL", value: footer.icon_url }
    ]) }})
    {% endif %}

    {%- if fields | length %}
    .addFields(
        {% for field in fields %}
            {{ dict([
                { name: "name", value: field.name },
                { name: "value", value: field.value },
                { name: "inline", value: "true" if footer.inline else "false", no_quotes: true }
            ]) }}
        {% endfor %}
    )
    {% endif %}
