Notes

To let a user delete their own reviews:

1. when rendering all of the reviews, check if the review's user id matches the id of the currently logged in user
2. on the server, in your delete request, check if the user who is sending the request has the ID that matches
   the user_id of the review
   This means you have send the currently logged in user's ID in the delete request when you set it up in React

