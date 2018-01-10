require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :index
end

get '/results' do
  # if some reason redirect_to '/?id=sdfsdf'

  url = "http://www.omdbapi.com/?apikey=2f6435d9&s=#{params[:title]}"
  @movies = HTTParty.get(url).parsed_response['Search']
  erb :results
end

get '/movie' do
  url = "http://www.omdbapi.com/?apikey=2f6435d9&i=#{params[:id]}"
  @movie = HTTParty.get(url).parsed_response
  erb :movie
end


http://localhost:4567/results?title=jaws








