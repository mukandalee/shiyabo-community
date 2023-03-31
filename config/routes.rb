Rails.application.routes.draw do
  resources :groups
  resources :categories
  resources :users 
  resources :events
  resources :contributions
  resources :admins
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"

delete "/logout", to: "sessions#destroy"


  
end
