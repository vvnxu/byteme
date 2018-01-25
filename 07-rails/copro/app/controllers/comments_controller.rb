class CommentsController < ApplicationController

  def create
    comment = Comment.new
    comment.content = params[:content]
    comment.user_id = session[:user_id]
    comment.project_id = params[:project_id]
    comment.save
    redirect_to "/projects/#{comment.project_id}"
  end

end
