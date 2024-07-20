class HomeController < ApplicationController
  before_action :authenticate_user!, only: [:search, :add_to_collection]

  def index
    @plants = current_user.plants if user_signed_in?
  end

  def search
    if params[:query].present?
      response = PlantSearchService.new(params[:query]).search
      @plants = response.parsed_response || []
    else
      @plants = []
    end
  end

  def add_to_collection
    plant_params = params.require(:plant).permit(:common_name, :latin_name, :image_url, :categories, :watering, :light_ideal, :url)
    plant = Plant.find_or_create_by(plant_params)
    current_user.plants << plant unless current_user.plants.include?(plant)
    redirect_to root_path, notice: 'Plant added to your collection!'
  end
end
