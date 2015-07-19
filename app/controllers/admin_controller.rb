class AdminController < ApplicationController
  layout 'admin'

  def index
    @admin = current_user
  end
end
