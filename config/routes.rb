Rails.application.routes.draw do
  root 'welcome#index'
  devise_for :users
  # root 'home#index'
  get 'home/index'
  get 'home/search', to: 'home#search', as: 'search_home'
  post 'home/add_to_collection', to: 'home#add_to_collection', as: 'add_to_collection_home_index'
  delete 'home/remove_from_collection/:id', to: 'home#remove_from_collection', as: 'remove_from_collection_home'
  get 'home/show/:id', to: 'home#show', as: 'show_plant'
end
