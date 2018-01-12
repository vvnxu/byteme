require 'sinatra'
require 'sinatra/reloader'
require 'pg'

get '/' do
  conn = PG.connect(dbname: 'goodfoodhunting')
  @dishes = conn.exec("SELECT * FROM dishes;")
  conn.close
  erb :index
end

get '/dishes/new' do
  erb :new
end

get '/dishes/:id' do
  conn = PG.connect(dbname: 'goodfoodhunting')
  @dish = conn.exec("SELECT * FROM dishes WHERE id = #{params[:id]}").first
  conn.close
  erb :show
end


post '/dishes' do
  # this is where we create the record in the db
  # connect to db
  conn = PG.connect(dbname: 'goodfoodhunting')
  # execute a sql statement
  sql = "INSERT INTO dishes (name,image_url) VALUES ('#{params[:name]}','#{params[:image_url]}');"

  result = conn.exec(sql)
  # close the db connection
  conn.close

  redirect '/'
end

post '/dishes/:id/delete' do
  conn = PG.connect(dbname: 'goodfoodhunting')
  sql = "DELETE FROM dishes WHERE id = #{params[:id]});"
  conn.close
  redirect '/'
end





