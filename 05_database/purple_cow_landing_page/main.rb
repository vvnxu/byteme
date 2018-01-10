require 'sinatra'
require 'sinatra/reloader'

# home routes
get '/' do
  erb :index
end

# about
get '/about' do
  erb :about
end

get '/donate' do
  erb :donate
end

# http://localhost:4567/email_input?email=dt@ga.co
# params = { "email": "dt@ga.co" }
get '/email_input' do
  # params is a hash of the querystring
  # return params[:email] # sinatra allows symbols or strings as keys for the params hash

  # store it in a file
  file = File.open('suckers.txt', 'a') # append mode
  file.puts(params[:email])
  file.close
  return "thank you for you money"
end

get '/suckers' do
  file = File.readlines('suckers.txt')
  @list = file # array of emails
  erb :suckers
end







