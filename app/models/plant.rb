class Plant < ApplicationRecord
    has_many :user_plants
    has_many :users, through: :user_plants
  
    validates :common_name, presence: true
    validates :latin_name, presence: true
    validates :image_url, presence: true
    validates :categories, presence: true
    validates :watering, presence: true
    validates :light_ideal, presence: true
    validates :url, presence: true
  end

class AddTimerToPlants < ActiveRecord::Migration[6.1]
  def change
    add_column :plants, :timer_end_at, :datetime
  end
end
  