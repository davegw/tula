class AddSp500ReturnToHistoricReturns < ActiveRecord::Migration
  def change
    add_column :historic_returns, :sp500_return, :decimal
  end
end
