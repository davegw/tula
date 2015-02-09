class HistoricReturn < ActiveRecord::Base
  attr_accessible :year, :sp500_return, :tula_return
end
