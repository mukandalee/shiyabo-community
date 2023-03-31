class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :eventName
      t.string :image
      t.string :eventVenue
      t.string :description
      t.string :eventDate
      t.string :category

      t.timestamps
    end
  end
end
