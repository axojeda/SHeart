class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :red_flag
      t.string :alert
      t.string :tea
      t.string :vouched
      t.string :green_flag
      t.string :request
      t.integer :user_id
      t.integer :post_id

      t.timestamps
    end
  end
end
