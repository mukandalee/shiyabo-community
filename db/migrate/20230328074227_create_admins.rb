class CreateAdmins < ActiveRecord::Migration[7.0]
  def change
    create_table :admins do |t|
      t.string :adminName
      t.string :adminEmail
      t.string :phoneNumber
      t.string :password

      t.timestamps
    end
  end
end
