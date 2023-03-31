class AdminsController < ApplicationController
    def index
        admins =Admin.all
        render json:admins

    end
    def show
      admin = Admin.find_by(id: session[:user_id])
      if admin
        render json: admin
      else
        render json: { error: "Not authorized" }, status: :unauthorized
      end
    end
    
    def create
        admin = Admin.create(user_params)
        if admin.valid?
          render json: admin, status: :created
        else
          render json: { errors: admin.errors.full_messages }, status: :unprocessable_entity
        end
      end
    
      private
    
      def user_params
        params.permit(:adminName, :adminEmail, :phoneNumber, :password)
      end
end
