class CreatePlants < ActiveRecord::Migration[7.1]
  def change
    create_table :plants do |t|
      t.string :common_name
      t.string :latin_name
      t.string :image_url
      t.string :categories
      t.string :watering
      t.string :light_ideal
      t.string :url

      t.timestamps
    end
  end
end
