class SessionsController < ApplicationController

    # Log in to the website
    def create
        user = User.find_by(email: params[:email])
        if(user&.authenticate(params[:password]))
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end

    # Log out from the website
    def destroy
        session.delete :user_id
        head :no_content
    end

end
