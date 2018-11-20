# Hack to enable use of ruby v2.4.5 with Rails 3. Typically to use ruby v2.4, Rails 5 is needed.
# This allows us to keep using Rails 3 with Ruby 2.4, which is the oldest ruby version supported by
# Heroku. This initializer file can (and probably should) be removed when Rails is upgraded.
#
# References for this initializer:
# https://stackoverflow.com/a/44286212
# https://github.com/rails/arel/commit/dc85a6e9c74942945ad696f5da4d82490a85b865
module Arel
  module Visitors
    class DepthFirst < Arel::Visitors::Visitor
      alias :visit_Integer :terminal
    end

    class Dot < Arel::Visitors::Visitor
      alias :visit_Integer :visit_String
    end

    class ToSql < Arel::Visitors::Visitor
      alias :visit_Integer :literal
    end
  end
end
