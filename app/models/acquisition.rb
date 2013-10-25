class Acquisition < ActiveRecord::Base
  attr_accessible :acquisition_date, :acquisition_price, :initial_date, :initial_price, :return, :year, :company
end
