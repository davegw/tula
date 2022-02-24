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
    historic_returns_json = File.read './historic_returns_data.json'
    raw_historic_returns = JSON.parse historic_returns_json, :symbolize_names => true
    @historic_returns = raw_historic_returns.sort_by { |historic_return| historic_return[:year] }
    @last_update = @historic_returns.last
  end

  def acquisitions
    acquisitions_json = File.read './acquisitions_data.json'
    raw_acquisitions = JSON.parse acquisitions_json, :symbolize_names => true
    @acquisitions = raw_acquisitions.sort_by { |acq| acq[:id] }.reduce({}) do |acq_hash, acquisition|
      year = acquisition[:year]
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
