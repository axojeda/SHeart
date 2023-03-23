class ReviewsController < ApplicationController

    def index
        review = Review.all
        render json: review
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: :ok
    end

    def destroy
        review = Review.find_by!(id: params[:id])
        review.destroy
        head :no_content
    end

    # create the controller method to get the reviews by post id, which came from React
    # it sends back an array of json
   def find_review_by_post(:id)
    review = Review.find_by!(id: params[:id])
    render json: review
   end 

    private

    def post_params 
        params.permit(:red_flag, :alert, :tea, :vouched, :green_flag, :request, :post_id, :user_id)
    end

end
