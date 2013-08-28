class CreateHistoricReturns < ActiveRecord::Migration
  def change
    create_table :historic_returns do |t|
      t.integer :year
      t.decimal :return
      t.string :fund

      t.timestamps
    end
  end
end
