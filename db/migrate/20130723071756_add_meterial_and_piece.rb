class AddMeterialAndPiece < ActiveRecord::Migration
  def change
    add_column :rosewoods,:piece, :integer
    add_column :rosewoods,:material, :string
  end
end
