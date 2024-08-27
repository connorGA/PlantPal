class HomeController < ApplicationController
  before_action :authenticate_user!, only: [:search, :add_to_collection, :remove_from_collection, :show, :set_watering, :tasks]

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
    redirect_to home_index_path, notice: 'Plant added to your collection!'
  end

  def remove_from_collection
    @plant = current_user.plants.find(params[:id])
    current_user.plants.delete(@plant)
  
    respond_to do |format|
      format.turbo_stream # renders the remove_from_collection.turbo_stream.erb view
      format.html { redirect_to home_index_path, notice: 'Plant removed from your collection!' }
    end
  end

  def show
    @plant = current_user.plants.find(params[:id])
  end

  def set_watering
    @plant = current_user.plants.find(params[:id])
    duration_in_seconds = params[:timer][:days].to_i * 86400 + params[:timer][:hours].to_i * 3600 + params[:timer][:minutes].to_i * 60
    # Update the plant's timer_end_at attribute with the current time plus the duration
    @plant.update(timer_end_at: Time.current + duration_in_seconds.seconds)
  
    redirect_to home_path(@plant), notice: 'Watering timer set!'
  end

  def tasks
    @tasks = current_user.plants.where('timer_end_at <= ?', Time.current)
  end
  
end
