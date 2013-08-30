class RemoveColumns < ActiveRecord::Migration
  def up
    remove_column :historic_returns, :fund
  end

  def down
    add_column :historic_returns, :fund, :string
  end
end
