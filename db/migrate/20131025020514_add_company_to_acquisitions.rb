class AddCompanyToAcquisitions < ActiveRecord::Migration
  def change
    add_column :acquisitions, :company, :string
  end
end
