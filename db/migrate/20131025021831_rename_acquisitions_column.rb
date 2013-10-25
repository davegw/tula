class RenameAcquisitionsColumn < ActiveRecord::Migration
  def up
    rename_column :acquisitions, :acquisitions_price, :acquisition_price
  end

  def down
    rename_column :acquisitions, :acquisition_price, :acquisitions_price
  end
end
