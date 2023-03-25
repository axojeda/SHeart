class ApplicationController < ActionController::API
    include ActionController::Cookies
    
    def authenticate
      puts "authenticate"
      app_secret_key = "ilove$oup"
      # we get the token out of the headers
      token = request.headers['Authorization']
      decoded_token = JWT.decode(token, app_secret_key, true, { algorithm: 'HS256' })
      data = decoded_token[0]
      if data['user_id']
        @current_user = User.find_by!(id: data['user_id'])
        p @current_user.email + ' is logged in'
      else
        return render json: {'error': 'Unauthorized'}, status: 401
      end
    end
end
