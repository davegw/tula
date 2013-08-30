class RenameReturnFieldInHistoricReturns < ActiveRecord::Migration
  def up
    rename_column :historic_returns, :return, :tula_return
  end

  def down
    rename_column :historic_returns, :tula_return, :return
  end
end
