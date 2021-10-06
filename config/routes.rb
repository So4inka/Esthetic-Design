Rails.application.routes.draw do
  # post '/users', to: 'users#create'
resources :users, only: :create
post '/auth/login', to: 'authentication#login'
get '/auth/verify', to: 'authentication#verify'
resources :rooms
resources :items, only: [:index, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
