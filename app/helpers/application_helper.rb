module ApplicationHelper
  def active_class(path)
    request.path =~ /#{path}/ ? 'selected' : nil
  end
end
