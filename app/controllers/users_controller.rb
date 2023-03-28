class UsersController < ApplicationController
    before_action :authenticate, only:[:show, :me]

    def me
		render json: { user: @current_user}, status: 200
	end
    
    def index
        user = User.all
        render json: user
    end

    # Check if the user is currently logged in
    def show
		user = User.find(params[:id])
		if @current_user.id == user.id
			render json: {user: user}, status: 200
		else
			render json: {error: "Access denied!"}, status: 401
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
