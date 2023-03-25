class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :red_flag, :alert, :tea, :vouched, :green_flag, :request, :user_id, :post_id, :user
  
  has_one :post
  has_one :user
end
