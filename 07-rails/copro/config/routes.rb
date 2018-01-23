Rails.application.routes.draw do
  get '/', to: 'pages#home'

  get '/login', to: 'session#new'
  post '/session', to: 'session#create'

  resources :projects
  resources :users
end
