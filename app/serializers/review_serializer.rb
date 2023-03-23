class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :red_flag, :alert, :tea, :vouched, :green_flag, :request, :user_id, :post_id
  
  belongs_to :post
  belongs_to :user
end
