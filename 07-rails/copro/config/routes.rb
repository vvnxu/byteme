Rails.application.routes.draw do
  get '/', to: 'pages#home'

  get '/login', to: 'session#new'
  post '/session', to: 'session#create'

  resources :projects, only: [:new, :create]
  resources :users
end
