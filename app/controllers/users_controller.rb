class UsersController < ApplicationController
  def create
    params[:user][:email].downcase!
    params[:user][:registered_at] = Time.now
    @user = User.new(params[:user])
    if @user.save
      session[:user_id] = user.id
      redirect_to root_url
    else
      render 'new'
    end
  end

  def new
    @user = User.new
  end

  def login
  end

  def logout
    session[:user_id] = nil
    redirect_to users_login_path, :alert => 'Logged out'
  end

  def authenticate
    user = User.find_by_email(params[:email].downcase)
    if user.nil?
      flash.alert = 'Email address is not registered'
      return render 'login'
    end

    if user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_url
    else
      flash.alert = 'Invalid password'
      render 'login'
    end
  end
end
