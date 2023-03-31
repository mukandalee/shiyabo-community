class EventsController < ApplicationController
   def  index
    events =Event.all
    render json: events
   end

   def show 
    event =Event.find(params[:id])
    render json: event
   end

   def create
      event = Event.create(event_params)
      render json: event ,status: :created
    end
  
    # PATCH/PUT
    def update
      event = Event.find_by(id: params[:id])
      event.update(event_params)
      render json: event
    end
  
    def destroy
      event = Event.find_by(id: params[:id])
      event.destroy
      head :no_content
    end

    private
       
      # Only allow a list of trusted parameters through.
      def event_params
        params.permit(:image ,:eventName, :eventVenue,:description, :eventDate, :category)
      end
end
