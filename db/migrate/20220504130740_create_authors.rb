class CreateAuthors < ActiveRecord::Migration[7.0]
  def change
    # definition of creation table
    create_table :authors do |t|
      t.string :name
      t.string :email
      t.string :qualification
      t.date :birthday

      t.timestamps
      # id: primary_key
      # Created_at: automatic
      # Updated_at: automatic
    end
  end
end
