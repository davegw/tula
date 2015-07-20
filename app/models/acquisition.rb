class Acquisition < ActiveRecord::Base
  attr_accessible :acquisition_date, :acquisition_price, :initial_date, :initial_price, :return, :year, :company

  def calc_return!
    self.return = (acquisition_price - initial_price)/initial_price
    self.save
  end

  def self.last_updated
    self.order('updated_at').last
  end
end
