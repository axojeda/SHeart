class ApplicationController < ActionController::API
    include ActionController::Cookies
    
    def authenticate
      #puts "authenticate"
      app_secret_key = "ilove$oup"
      # we get the token out of the headers
      # token = request.headers['Authorization']
      decoded_token = JWT.decode(request.headers['Authorization'], app_secret_key, true, { algorithm: 'HS256' })
      user = User.find(decoded_token[0]['user_id'])
      if user
        @current_user = user
      else
        return render json: {'error': 'Unauthorized'}, status: 401
      end
    end
end
