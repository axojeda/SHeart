p "seeding"

p "seeding users"

User.create!(
  id: 1,
  username: "Mariainny",
  location: "Queens, NY, US", 
  email: "maria@dev.com",
  password: "123456"
)

User.create!(
  id: 2,
  username: "April88",
  location: "Manhattan, NY, US", 
  email: "april@dev.com",
  password: "890567"
)

User.create!(
  id: 3,
  username: "Paolabb",
  location: "Brooklyn, NY, US", 
  email: "paolabb@dev.com",
  password: "1456789"
)

p "seeding posts"
Post.create!(
  id: 1,
  name: "Maurice",
  age: 35, 
  location: "Manhattan, NYC",
  ethnicity: "West African",
  post_img: "https://neural.love/ai-art-generator/1ed83019-64bc-674c-96a2-7582f52314f8/portrait-of-african-american-male-god-like-emperor-young-handsome-dark-skin",
  tea: "🍵",
  red_flag: "🚩",
  user_id: 1,
  follow: true
)

Post.create!(
  id: 2,
  name: "WonKyun",
  age: 30, 
  location: "Manhattan, NYC",
  ethnicity: "Korean",
  post_img: "https://images.nightcafe.studio/jobs/Lu2Iu2kVKFu6GmgT0tB4/Lu2Iu2kVKFu6GmgT0tB4--4--51rcw.jpg?tr=w-1600,c-at_max",
  red_flag: "🚩",
  user_id: 1,
  follow: true
)

Post.create!(
  id: 3,
  name: "Davis",
  age: 37, 
  location: "Brooklyn, NYC",
  ethnicity: "Dominican",
  post_img: "https://neural.love/ai-art-generator/1ed89a09-b65e-6ef6-8cbd-a7156d8ddb92/a-latino-man-with-boxy-proportions-short-brown-hair-a-short-beard-and-dark-blue-eyes",
  request: "❓",
  user_id: 2,
  follow: true
)

Post.create!(
  id: 4,
  name: "James",
  age: 39, 
  location: "Queens, NYC",
  ethnicity: "German",
  post_img: "https://neural.love/cdn/ai-photostock/1ed80317-76c5-6daa-a435-835328fa2381/0.jpg?Expires=1682899199&Signature=YJzMd66BTjspOcmEgmYfxjAQq-xJMTZkCHsobKOVq6yKCnB2oUvH029eOxaFu91T2BPGjMy8WHDFHgLFcfdVsYJ09Ril82hxvnMNzVpOAbGtNVf3FHdkYgDrdIfYGKfk3r5U7WFUKFsovSL~Kk~ZCWqo9EOjEZU~pcaSnSBLZuxWftmxENSKl-TYDqtnxPpNcK5lrXnf8QFxNfCQGBwdi7jGoz1POVpOJ9AFAzNSY6hq0jyxhIZWN~Vf1v8MBLzu7Wagn48A2wMo-U-jkdZ7TK8NmSwHsMxqVaQTz27pJn0e-DLXOMuDW89AYPc7Qw2PwOjLtwPL8DgFDQ5Zwy~2Kg__&Key-Pair-Id=K2RFTOXRBNSROX",
  green_flag: "💚",
  vouched: "✅",
  user_id: 3,
  follow: true
)

p "seeding reviews"

Review.create!(
request: "❓",
user_id: 2
post_id: 1
)

Review.create!(
red_flag: "🚩",
user_id: 3,
post_id: 2
)

Review.create!(
request: "❓",
user_id: 3,
post_id: 2
)

Review.create!(
tea: "🍵",
user_id: 1,
post_id: 2
)

Review.create!(
green_flag: "💚",
user_id: 2,
post_id: 4
)

Review.create!(
request: "❓",
user_id: 3,
post_id: 1
)

p "done seeding"