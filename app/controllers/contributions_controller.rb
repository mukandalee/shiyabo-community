class ContributionsController < ApplicationController
    def index
        contributions =Contribution.all
       render json: contributions
       end 
       def show
        contribution =Contribution.find_by(id: params[:id])
        render json: contribution
       end 
       def create
        contribution = Contribution.create(contribution_params)
        render json: contribution ,status: :created
      end
    
      # PATCH/PUT
      def update
        contribution = Contribution.find_by(id: params[:id])
        contribution.update(contribution_params)
        render json: contribution
      end
    
      def destroy
        contribution = Contribution.find_by(id: params[:id])
        contribution.destroy
        head :no_content
      end
    end
       private
       def contribution_params
        Contribution.permit(:eventName, :eventDate ,:contributionTarget) 
       end
    
end
