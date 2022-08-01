EmbedBuilder embed = new EmbedBuilder();
{##}

{%- if title %}
embed.setTitle("{{ title }}", null);
{% endif %}

{%- if description %}
embed.setDescription("{{ description }}");
{% endif %}

{%- if color %}
embed.setColor("{{ color }}")
{% endif %}

{%- if footer.text or footer.icon_url %}
embed.setFooter("{{ footer.text }}", "{{ footer.icon_url }}")
{% endif %}

{%- for field in fields %}
{%- if field.name or field.value %}
embed.addField("{{ field.name }}", "{{ field.value }}", {{ 'true' if field.inline else 'false' }})
{% endif %}
{% endfor %}
