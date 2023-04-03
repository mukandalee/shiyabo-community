class CreateMembers < ActiveRecord::Migration[7.0]
  def change
    create_table :members do |t|
      t.string :name
      t.string :group
      t.string :role

      t.timestamps
    end
  end
end
