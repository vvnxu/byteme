require 'sinatra'
require 'sinatra/reloader'
require 'weather-api'
require 'pry'


# -------------- url -----------------
# protocol
#          domain
#                  port
#                       path                    
#                              query string
# http://localhost:4567/greetings?name=dt&age=400
#                                   params { "name" => "dt", "age" => 400}

get '/' do
  city = params["city"]
  @res = Weather.lookup_by_location("#{city},Australia", Weather::Units::CELSIUS)
  erb(:index)
end

get '/about' do
  'about me'
end

get '/greetings' do
  "hello #{params['name']}"
end




  # whatever user pass in through the query string will be in a hash call params
  # binding.pry

  # city = params["city"]

  # @res = Weather.lookup_by_location("#{city},Australia", Weather::Units::CELSIUS)
  
  # erb(:index)






