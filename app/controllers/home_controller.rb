class HomeController < ApplicationController
  before_action :authenticate_user!, only: [:search]

  def index
  end

  def search
    if params[:query].present?
      response = PlantSearchService.new(params[:query]).search
      @plants = response.parsed_response || []
    else
      @plants = []
    end
  end
end
