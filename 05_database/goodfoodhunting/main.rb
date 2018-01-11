require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'pg'

get '/' do
  conn = PG.connect(dbname: 'goodfoodhunting')
  sql = "SELECT * FROM dishes;"
  @dishes = conn.exec(sql)
  binding.pry
  conn.close
  erb :index
end


get '/dishes/new' do
  erb :new
end

get '/dishes/:id' do
  conn = PG.connect(dbname: 'goodfoodhunting')
  sql = "SELECT * FROM dishes WHERE ID = #{params[:id]};"
  @dish = conn.exec(sql).first # exec returns an array of hashes even if it contains one record
  erb :show
end

post '/dishes' do
  # this is where we create the record in the db
  # connect to db
  conn = PG.connect(dbname: 'goodfoodhunting')
  # execute a sql statement
  sql = "INSERT INTO dishes (name,image_url) VALUES ('#{params[:name]}','#{params[:image_url]}');"
  conn.exec(sql)
  # close the db connection
  conn.close
  redirect '/'
end

post '/dishes/:id/delete' do
  # return "deleting dish #{params[:id]}... "

  # connect to db
  # prepare sql with right id
  # execute
  # redirect to '/'
end








