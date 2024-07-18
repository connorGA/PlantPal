class HomeController < ApplicationController
  def index
    if params[:query].present?
      response = PlantSearchService.new(params[:query]).search
      @plants = response.parsed_response || []
      Rails.logger.info "Plants: #{@plants.inspect}" # Log the response
    else
      @plants = []
    end
  end
end
