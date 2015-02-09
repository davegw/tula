class HomeController < ApplicationController

  # Constants
  INITIAL_INVESTMENT = 100000
  CURRENT_YEAR = 2015

  def index
  end

  def coming_soon
    @noheader = true
    @comingsoon = true
  end

  def about
  end

  def why
    @initial_investment = INITIAL_INVESTMENT
    @historic_returns = HistoricReturn.where('year >= ?', 1994).order(:year)
  end

  def acquisitions
    @years = (2013..CURRENT_YEAR).to_a
    @acquisitions = @years.reduce({}) do |acquisitions, year|
      acquisitions[year] = Acquisition.where(:year => year).order(:id)
      acquisitions
    end
    @disclosures = {
      2013 => '* On 6/10/13, the deal for the buy out of Virgin Media by Liberty Global 
               was completed. Virgin Media shareholders received $17.50 for each share they 
               owned plus stock in Liberty Global. Total return including both cash payments 
               and receipt of Liberty Global stock equates to a 35% return over the 1/1/13 
               valuation.'
    }
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
