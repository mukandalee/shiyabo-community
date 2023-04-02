Rails.application.routes.draw do
  resources :groups
  resources :categories
  resources :users 
  resources :events
  resources :contributions
  resources :admins
  post '/login',    to: 'sessions#create'
post '/logout',   to: 'sessions#destroy'
get '/logged_in', to: 'sessions#is_logged_in?'

  
end
