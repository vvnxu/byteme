require 'sinatra'
require 'sinatra/reloader' 

# what url should the user type
# what request can to user make on the server
# makes 'get' request to /home

get '/home' do # request
  # for the response
  erb(:index)
end

get '/donate' do
  'thank you'
end

# user can send 2 nums
# server respond with the sum
get '/add' do
  num1 = params[:num1].to_i
  
end

get '/greetings' do
  "hello #{ params[:name] }"
end






