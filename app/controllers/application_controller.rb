class ApplicationController < ActionController::Base
  protect_from_forgery

  # Needed to access current user from controllers.
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
end
