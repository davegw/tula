class UsersController < ApplicationController
  def create
    params[:user][:email].downcase!
    params[:user][:registered_at] = Time.now
    @user = User.new(params[:user])
    if @user.save
      redirect_to root_url
    else
      render 'new'
    end
  end

  def new
    @user = User.new
  end
end
