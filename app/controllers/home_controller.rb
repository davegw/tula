class HomeController < ApplicationController
  def index
  end

  def coming_soon
    @noheader = true
    @comingsoon = true
  end

  def about
  end

  def why
    @initial_investment = 100000
    @historic_returns = HistoricReturn.where("year >= ?", 1994).order(:year)
  end

  def acquisitions
  end

  def references
  end

  def prospectus
  end

  def contact
  end

  def terms
  end
  
end
