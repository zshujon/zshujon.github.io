source "https://rubygems.org"

gem "jekyll", "~> 4.3.0"
gem "jekyll-feed", "~> 0.12"
gem "jekyll-seo-tag"
gem "jekyll-theme-minimal"
gem "webrick", "~> 1.7"
gem "csv"
gem "base64"

group :jekyll_plugins do
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
  gem "wdm", ">= 0.1.0"
end

# Lock `http_parser.rb` to `v0.6.x` on JRuby builds since newer versions of this gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
