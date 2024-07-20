Rails.application.routes.draw do
  root 'home#index'
  get 'home/index'
  get 'home/search', to: 'home#search', as: 'search_home'
end
