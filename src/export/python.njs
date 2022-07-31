{%- macro params(params, del=", ") -%}
    {%- set params = params | selectattr("value") -%}
    {%- for param in params -%}
        {{ param.name }}={{ '"' if not param.no_quotes }}{{ param.value }}{{ '"' if not param.no_quotes }}{{ del if not loop.last }}
    {%- endfor -%}
{%- endmacro -%}

{%- macro fun(func, parameters) -%}
{%- if parameters | selectattr("value") | length %}
    {{ func }}({{ params(parameters) }})
{% endif %}
{%- endmacro -%}

{% set comma = joiner() %}
embed = discord.Embed(
    {{ params(
        [
            { name: "colour", value: color },
            { name: "title", value: title },
            { name: "url", value: url },
            { name: "description", value: description }
        ], ", \n    "
    ) }}
)
{##}
    {%- for field in fields -%}
        {%- if field.name or field.value %}
            {{- fun(".addField", [
                { name: "name", value: field.name },
                { name: "value", value: field.value },
                { name: "inline", value: "True" if field.inline else "False", no_quotes: true }
            ]) }}
        {% endif -%}
    {%- endfor %}
    {{- fun(".setAuthor", [
        { name: "name", value: author.name },
        { name: "url", value: author.url },
        { name: "icon_url", value: author.icon_url }
    ]) }}
    {{- fun(".setFooter", [
        { name: "text", value: footer.text },
        { name: "icon_url", value: footer.icon_url }
    ]) }}
    {{- fun(".setImage", [
        { name: "url", value: image.url }
    ]) }}
    {{- fun(".setThumbnail", [
        { name: "url", value: thumbnail.url }
    ]) }}
