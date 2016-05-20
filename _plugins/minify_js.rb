Jekyll::Hooks.register :site, :post_write do |site|
  # Minify JavaScript files before site build
  gulp = File.join(site.source, 'node_modules', '.bin', 'gulp')
  system "#{gulp} minifyJS --silent"
end
