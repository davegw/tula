class HomeController < ApplicationController
  def index
  end

  def coming_soon
    @noheader = true
    @comingsoon = true
  end

  def contact
  end

  def why
  end
  
end
