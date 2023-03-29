class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable
   
    def index
        post = Post.all.order('created_at DESC')
        render json: post
    end

    def show
        post = Post.find_by(id: params[:id])
        render json: post, status: 200
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def update
        post = Post.find_by!(id: params[:id])
        post.update!(post_params)
        render json: post, status: :ok
    end

    def destroy
        post = Post.find_by!(id: params[:id])
        post.destroy
        head :no_content
    end

    private

    def post_params 
        params.permit(:name, :age, :location, :ethnicity, :post_img, :red_flag, :green_flag, :vouched, :tea, :request, :alert, :user_id)
    end

    def render_not_found
        render json: {error: "Post not found"}, status: :not_found
    end

    def render_unprocessable(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end

