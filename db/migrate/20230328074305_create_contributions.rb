class CreateContributions < ActiveRecord::Migration[7.0]
  def change
    create_table :contributions do |t|
      t.string :eventName
      t.string :eventDate
      t.string :contributionTarget

      t.timestamps
    end
  end
end
