class AddIndexUpdatedAtToAcquisitions < ActiveRecord::Migration
  def change
    add_index :acquisitions, :updated_at
  end
end
