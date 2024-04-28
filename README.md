# Blogging-Project

Develop a simple RESTful API for a blogging platform using Node.js. This API will be used to manage blog posts and comments.

# setup

1.clone the repository
2.Install dependencies :`npm install`
3.Start MongoDB server.
4.Run the application:`npm start`

# Endpoints

### Posts

- POST /posts
- GET /posts
- GET /post/:id
- PUT /post/:id
- DELETE /post/:id

### Comments

- POST /comments
- GET /comments/:postid
- DELETE /comments/:id

## libraries

npm init- y

- npm i
- express - for creating web applications and handling requests
- mongoose - for interacting with MongoDB database
- mongodb
- nodemon - to automatically restart the server when changes are made
