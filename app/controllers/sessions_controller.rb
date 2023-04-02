class SessionsController < ApplicationController
  def create
    @user = Admin.find_by(adminName: session_params[:adminName])
  
    if @user && @user.authenticate(session_params[:password])
      login!
      render json: {
        logged_in: true,
        user: @user
      }
    else
      render json: { 
        status: 401,
        errors: ['no such user, please try again']
      }
    end
enddef is_logged_in?
    if logged_in? && current_user
      render json: {
        logged_in: true,
        user: current_user
      }
    else
      render json: {
        logged_in: false,
        message: 'no such user'
      }
    end
enddef destroy
      logout!
      render json: {
        status: 200,
        logged_out: true
      }
endprivatedef session_params
      params.require(:user).permit(:adminName, :password)
end
end
end

