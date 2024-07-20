Rails.application.routes.draw do
  devise_for :users
  root 'home#index'
  get 'home/index'
  get 'home/search', to: 'home#search', as: 'search_home'
end
