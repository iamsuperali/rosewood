class CreateRosewoods < ActiveRecord::Migration
  def change
    create_table :rosewoods do |t|
      t.string :title
      t.integer :category_id
      t.string :description
      t.attachment :image

      t.timestamps
    end
  end
end
