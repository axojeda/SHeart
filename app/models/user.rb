class User < ApplicationRecord
    has_secure_password

    has_many :posts
    has_many :reviews
    has_many :chatrooms, through: :messages

   
end
