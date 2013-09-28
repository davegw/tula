module HomeHelper
  def render_prospectus_link(text, hash)
    haml_tag :li, :id => 'nav-' + hash do
      haml_tag :a, text, :href => '#' + hash
    end
  end
  def render_prospectus_section(section, hash)
    haml_tag :div, :class => 'prospectus_section' do
      haml_tag :a, :id => hash
      haml_tag :h3, section, :class => 'prospectus_heading', :id => 'section-' + hash
      yield
    end
  end
  def render_prospectus_sub_link(text, hash)
    haml_tag :li do
      haml_tag :a, text, :href => '#' + hash
    end
  end
  def render_prospectus_sub_section(sub_section, hash)
    haml_tag :a, :id => hash
    haml_tag :div, sub_section, :class => 'prospectus_sub_heading'
    yield
  end
end
