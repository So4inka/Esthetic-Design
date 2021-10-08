Rails.application.routes.draw do
  # post '/users', to: 'users#create'
resources :users, only: :create
post '/auth/login', to: 'authentication#login'
get '/auth/verify', to: 'authentication#verify'
resources :rooms
resources :items, only: [:index, :show]
put '/rooms/:room_id/items/:id', to: 'items#add_item_to_the_room'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
