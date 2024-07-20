Rails.application.routes.draw do
  devise_for :users
  root 'home#index'
  get 'home/index'
  get 'home/search', to: 'home#search', as: 'search_home'
  post 'home/add_to_collection', to: 'home#add_to_collection', as: 'add_to_collection_home_index'
end
