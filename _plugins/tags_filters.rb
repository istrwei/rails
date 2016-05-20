module Jekyll
  module TagsFilters

    def tag_list(tags)
      meta = @context.registers[:site].data['tags']
      slugs = meta.map { |e| e['slug'] }
      names = []

      tags.each do |tag|
        slug = Jekyll::Utils.slugify(tag)

        next unless slugs.include?(slug)

        names << meta.select { |e| e['slug'] == slug }.first['name']
      end

      return if names.empty?

      names.join('，')
    end

  end
end

Liquid::Template.register_filter(Jekyll::TagsFilters)
