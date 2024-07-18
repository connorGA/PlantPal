require 'httparty'

class PlantSearchService
  include HTTParty
  base_uri 'https://house-plants2.p.rapidapi.com'

  def initialize(query)
    @options = {
      query: { query: query },
      headers: {
        "X-RapidAPI-Key" => ENV['RAPIDAPI_KEY'],
        "X-RapidAPI-Host" => 'house-plants2.p.rapidapi.com'
      }
    }
  end

  def search
    self.class.get('/search', @options)
  end
end
