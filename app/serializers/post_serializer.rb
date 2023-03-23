class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :location, :ethnicity, :post_img, :red_flag, :alert, :tea, :vouched, :green_flag, :request, :follow, :user_id
  
  has_many :reviews
  has_one :user
end
