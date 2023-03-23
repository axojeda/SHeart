class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :name
      t.integer :age
      t.string :location
      t.string :ethnicity
      t.string :post_img
      t.string :red_flag
      t.string :alert
      t.string :tea
      t.string :vouched
      t.string :green_flag
      t.string :request
      t.boolean :follow
      t.integer :user_id

      t.timestamps
    end
  end
end
