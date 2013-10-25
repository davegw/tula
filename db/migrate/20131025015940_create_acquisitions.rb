class CreateAcquisitions < ActiveRecord::Migration
  def change
    create_table :acquisitions do |t|
      t.integer :year
      t.date :initial_date
      t.date :acquisition_date
      t.decimal :initial_price
      t.decimal :acquisitions_price
      t.decimal :return

      t.timestamps
    end
  end
end
