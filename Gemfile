source 'https://rubygems.org'

ruby '2.4.5'

gem 'rails', '3.2.6'
gem 'haml'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

# Note: Need to install this gem by hand:
# `gem install pg -v '0.18.1' -- --with-cflags="-Wno-error=implicit-function-declaration"`
# source: https://stackoverflow.com/a/63583496
gem 'pg'
gem 'rake'
gem 'test-unit'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'
  gem 'uglifier', '>= 1.0.3'
  gem 'react-rails', '~> 1.0'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', :platforms => :ruby
end

gem 'jquery-rails'

# CMS for managing blog content.
gem 'comfortable_mexican_sofa', '~> 1.8.2'
gem 'comfy_blog', git: 'git://github.com/joahking/comfy-blog.git', branch: 'feature/1-8-1'

# To use ActiveModel has_secure_password
# Note: Need to install this gem by hand:
# `gem install bcrypt-ruby -v '3.0.1' -- --with-cflags=-Wno-implicit-function-declaration`
# source: https://stackoverflow.com/a/68928716
gem 'bcrypt-ruby', '~> 3.0.0', require: 'bcrypt'

# To use Jbuilder templates for JSON
# gem 'jbuilder'

# Use unicorn as the app server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
# gem 'debugger'

group :development do
  gem 'byebug'
  gem 'pry'
  gem 'rspec-rails'
end
