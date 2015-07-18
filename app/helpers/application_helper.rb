module ApplicationHelper
  def active_class(path)
    request.path =~ /#{path}/ ? 'selected' : nil
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
end
