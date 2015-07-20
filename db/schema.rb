# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20150720171737) do

  create_table "acquisitions", :force => true do |t|
    t.integer  "year"
    t.date     "initial_date"
    t.date     "acquisition_date"
    t.decimal  "initial_price"
    t.decimal  "acquisition_price"
    t.decimal  "return"
    t.datetime "created_at",        :null => false
    t.datetime "updated_at",        :null => false
    t.string   "company"
  end

  add_index "acquisitions", ["updated_at"], :name => "index_acquisitions_on_updated_at"

  create_table "blog_comments", :force => true do |t|
    t.integer  "post_id",                         :null => false
    t.string   "author",                          :null => false
    t.string   "email",                           :null => false
    t.text     "content"
    t.boolean  "is_published", :default => false, :null => false
    t.datetime "created_at",                      :null => false
    t.datetime "updated_at",                      :null => false
  end

  add_index "blog_comments", ["post_id", "created_at"], :name => "index_blog_comments_on_post_id_and_created_at"
  add_index "blog_comments", ["post_id", "is_published", "created_at"], :name => "index_blog_comments_on_post_published_created"

  create_table "blog_posts", :force => true do |t|
    t.string   "title",                                          :null => false
    t.string   "slug",                                           :null => false
    t.text     "content"
    t.string   "excerpt",      :limit => 1024
    t.string   "author"
    t.integer  "year",                                           :null => false
    t.integer  "month",        :limit => 2,                      :null => false
    t.boolean  "is_published",                 :default => true, :null => false
    t.datetime "published_at",                                   :null => false
    t.datetime "created_at",                                     :null => false
    t.datetime "updated_at",                                     :null => false
  end

  add_index "blog_posts", ["created_at"], :name => "index_blog_posts_on_created_at"
  add_index "blog_posts", ["is_published", "created_at"], :name => "index_blog_posts_on_is_published_and_created_at"
  add_index "blog_posts", ["is_published", "year", "month", "slug"], :name => "index_blog_posts_on_published_year_month_slug"

  create_table "blog_taggings", :force => true do |t|
    t.integer "post_id", :null => false
    t.integer "tag_id",  :null => false
  end

  add_index "blog_taggings", ["post_id", "tag_id"], :name => "index_blog_taggings_on_post_tag", :unique => true

  create_table "blog_tags", :force => true do |t|
    t.string  "name",                              :null => false
    t.boolean "is_category",    :default => false, :null => false
    t.integer "taggings_count", :default => 0,     :null => false
  end

  add_index "blog_tags", ["name", "taggings_count"], :name => "index_blog_tags_on_name_and_taggings_count", :unique => true
  add_index "blog_tags", ["taggings_count"], :name => "index_blog_tags_on_taggings_count"

  create_table "cms_blocks", :force => true do |t|
    t.integer  "page_id",    :null => false
    t.string   "identifier", :null => false
    t.text     "content"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "cms_blocks", ["page_id", "identifier"], :name => "index_cms_blocks_on_page_id_and_identifier"

  create_table "cms_categories", :force => true do |t|
    t.integer "site_id",          :null => false
    t.string  "label",            :null => false
    t.string  "categorized_type", :null => false
  end

  add_index "cms_categories", ["site_id", "categorized_type", "label"], :name => "index_cms_categories_on_site_id_and_categorized_type_and_label", :unique => true

  create_table "cms_categorizations", :force => true do |t|
    t.integer "category_id",      :null => false
    t.string  "categorized_type", :null => false
    t.integer "categorized_id",   :null => false
  end

  add_index "cms_categorizations", ["category_id", "categorized_type", "categorized_id"], :name => "index_cms_categorizations_on_cat_id_and_catd_type_and_catd_id", :unique => true

  create_table "cms_files", :force => true do |t|
    t.integer  "site_id",                                          :null => false
    t.integer  "block_id"
    t.string   "label",                                            :null => false
    t.string   "file_file_name",                                   :null => false
    t.string   "file_content_type",                                :null => false
    t.integer  "file_file_size",                                   :null => false
    t.string   "description",       :limit => 2048
    t.integer  "position",                          :default => 0, :null => false
    t.datetime "created_at",                                       :null => false
    t.datetime "updated_at",                                       :null => false
  end

  add_index "cms_files", ["site_id", "block_id"], :name => "index_cms_files_on_site_id_and_block_id"
  add_index "cms_files", ["site_id", "file_file_name"], :name => "index_cms_files_on_site_id_and_file_file_name"
  add_index "cms_files", ["site_id", "label"], :name => "index_cms_files_on_site_id_and_label"
  add_index "cms_files", ["site_id", "position"], :name => "index_cms_files_on_site_id_and_position"

  create_table "cms_layouts", :force => true do |t|
    t.integer  "site_id",                       :null => false
    t.integer  "parent_id"
    t.string   "app_layout"
    t.string   "label",                         :null => false
    t.string   "identifier",                    :null => false
    t.text     "content"
    t.text     "css"
    t.text     "js"
    t.integer  "position",   :default => 0,     :null => false
    t.boolean  "is_shared",  :default => false, :null => false
    t.datetime "created_at",                    :null => false
    t.datetime "updated_at",                    :null => false
  end

  add_index "cms_layouts", ["parent_id", "position"], :name => "index_cms_layouts_on_parent_id_and_position"
  add_index "cms_layouts", ["site_id", "identifier"], :name => "index_cms_layouts_on_site_id_and_identifier", :unique => true

  create_table "cms_pages", :force => true do |t|
    t.integer  "site_id",                           :null => false
    t.integer  "layout_id"
    t.integer  "parent_id"
    t.integer  "target_page_id"
    t.string   "label",                             :null => false
    t.string   "slug"
    t.string   "full_path",                         :null => false
    t.text     "content"
    t.integer  "position",       :default => 0,     :null => false
    t.integer  "children_count", :default => 0,     :null => false
    t.boolean  "is_published",   :default => true,  :null => false
    t.boolean  "is_shared",      :default => false, :null => false
    t.datetime "created_at",                        :null => false
    t.datetime "updated_at",                        :null => false
  end

  add_index "cms_pages", ["parent_id", "position"], :name => "index_cms_pages_on_parent_id_and_position"
  add_index "cms_pages", ["site_id", "full_path"], :name => "index_cms_pages_on_site_id_and_full_path"

  create_table "cms_revisions", :force => true do |t|
    t.string   "record_type", :null => false
    t.integer  "record_id",   :null => false
    t.text     "data"
    t.datetime "created_at"
  end

  add_index "cms_revisions", ["record_type", "record_id", "created_at"], :name => "index_cms_revisions_on_rtype_and_rid_and_created_at"

  create_table "cms_sites", :force => true do |t|
    t.string  "label",                          :null => false
    t.string  "identifier",                     :null => false
    t.string  "hostname",                       :null => false
    t.string  "path"
    t.string  "locale",      :default => "en",  :null => false
    t.boolean "is_mirrored", :default => false, :null => false
  end

  add_index "cms_sites", ["hostname"], :name => "index_cms_sites_on_hostname"
  add_index "cms_sites", ["is_mirrored"], :name => "index_cms_sites_on_is_mirrored"

  create_table "cms_snippets", :force => true do |t|
    t.integer  "site_id",                       :null => false
    t.string   "label",                         :null => false
    t.string   "identifier",                    :null => false
    t.text     "content"
    t.integer  "position",   :default => 0,     :null => false
    t.boolean  "is_shared",  :default => false, :null => false
    t.datetime "created_at",                    :null => false
    t.datetime "updated_at",                    :null => false
  end

  add_index "cms_snippets", ["site_id", "identifier"], :name => "index_cms_snippets_on_site_id_and_identifier", :unique => true
  add_index "cms_snippets", ["site_id", "position"], :name => "index_cms_snippets_on_site_id_and_position"

  create_table "historic_returns", :force => true do |t|
    t.integer  "year"
    t.decimal  "tula_return"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
    t.decimal  "sp500_return"
  end

  create_table "users", :force => true do |t|
    t.string   "name"
    t.string   "email"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
    t.string   "password_hash"
    t.datetime "registered_at"
    t.boolean  "admin"
    t.datetime "last_login"
  end

end
