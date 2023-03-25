class SessionsController < ApplicationController

    # Log in to the website
    def create
        app_secret_key = "ilove$oup"
        user = User.find_by(email: params[:email])
        if(user&.authenticate(params[:password]))
            token = JWT.encode({user_id: user.id}, app_secret_key, 'HS256')
            render json: {user: user, token: token}, status: :ok
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
