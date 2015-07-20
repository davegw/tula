class AdminController < ApplicationController
  layout 'admin'

  def index
    @admin = current_user
    @last_acquisition = Acquisition.last_updated
  end
end
