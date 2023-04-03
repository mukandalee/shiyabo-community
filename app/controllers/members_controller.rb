class MembersController < ApplicationController
    def index
        members = Member.all
        render json: members
    end
    def show 
        member = Member.find(params[:id])
        render json: member
    end
    def create
        member = Member.create(member_params)
        render json: member ,status: :created
      end

      private
      def member_params
        Member.permit(:name, :group ,:role) 
       end
end
