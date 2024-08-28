class AddLastTimerDurationToPlants < ActiveRecord::Migration[7.1]
  def change
    add_column :plants, :last_timer_duration, :integer
  end
end
