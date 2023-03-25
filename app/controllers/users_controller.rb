class UsersController < ApplicationController
    before_action :authenticate, only: [:show]
    
    
    def index
        user = User.all
        render json: user
    end

    # Check if the user is currently logged in
    def show
        # puts "Here is the cookie: #{session[:user_id]}"
        if(@current_user)
            render json: {user: @current_user}, status: :ok
        else
            render json: { error: "Please log in" }, status: :unauthorized
        end
    end

    # Sign up for a new account

    def create
        user = User.create(user_params)
        if(user.valid?)
            render json: user, serializer: UsershowSerializer, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(:username, :email, :password, :location)
    end
end
