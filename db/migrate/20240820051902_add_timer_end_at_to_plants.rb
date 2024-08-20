class AddTimerEndAtToPlants < ActiveRecord::Migration[7.1]
  def change
    add_column :plants, :timer_end_at, :datetime
  end
end
