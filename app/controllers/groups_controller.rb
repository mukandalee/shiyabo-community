class GroupsController < ApplicationController
    def index
       @groups = Group.all
        render json: @groups
    end
    def show 
        @group = Group.find(params[:id])
        render json: group
    end
    def create
        @group = Group.create(member_params)
        render json: @group ,status: :created
      end

      private
      def member_params
        Group.permit(:name) 
       end
end
