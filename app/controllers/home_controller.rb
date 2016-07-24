class HomeController < ApplicationController

  # Constants
  INITIAL_INVESTMENT = 100000

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
    @last_update = @historic_returns.last
  end

  def acquisitions
    @acquisitions = Acquisition.all.sort_by(&:id).reduce({}) do |acq_hash, acquisition|
      year = acquisition.year
      acq_hash[year] ||= []
      acq_hash[year].push(acquisition)
      acq_hash
    end
    @years = @acquisitions.keys.sort.reverse

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
