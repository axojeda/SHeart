class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :location, :email, :password_digest

  has_many :posts
  has_many :reviews
end
