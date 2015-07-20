class Admin::AcquisitionsController < ApplicationController
  layout 'admin'
  before_filter :authenticate_user!

  def index
  end

  def new
  end

  private

  def authenticate_user!
    return if current_user && current_user.admin?

    redirect_to root_url
  end
end
