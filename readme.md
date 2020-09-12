# estiMate
[To project](https://blooming-gorge-91386.herokuapp.com/)

### Description:
This is an assignment and experimentation using MERN stack.

An app that can help estimate your house/building construction cost.


### Objective:
I wanted to learn developing a web-app using framework and a non-SQL database.

### Tech stack:
The app was develop using MERN stack. (Mongo Express React Redux NodeJS)

- MongoDB

I am using free tier MongoDB Atlas as a remote server. Mongoose used to connect and as an ORM. Mongoose understand the database thru schemas.
- Express

ExpressJS used to handle the back end and routing.
- React

I used React to develop the front end.
- Redux

Redux is a middleware that handle data communication between elements.
- React-route-dom

To develop a multi page React app we need a route dom, that basically tell React that we have multiple pages. React will load appropiate page when a route address is called.
- Node.JS and Heroku micro service

I deployed the app to Heroku cloud platform using Heroku CLI and Git. Rather than building the app in my local machine and uploading Node package modules, thru package.json 'heroku-postbuild' entry, I can tell Heroku to build and get all the needed packages on the Heroku server.

### Building:
I am using VS Code IDE to develop the app. The IDE it self is 'neutral' and needs to be setup first by downloading related modules that can help with certain development. I already comfortable using this IDE for web-app development, especially it has a powershell build-in to it. I needs it to execute NPM, Git, Heroku CLI command.
Using NPM makes our work easier, to run the app I just need to execute 'npm run dev' in the powershell. We specify that command in the package.json file. Since we are using Express that have server and client side, we need 'concurrently' package that can run both server and client side of the app on localhost in one line.
I already prepared a users schema for login feature with a route that handle create new user in the DB.
To styling the page, I use Reactstrap a bootstrap package for React.

### Testing:
Testing was done manually through out the development process. I use Postman app to test my Express route queries.
To start the server I need to execute 'npm run server'. This will run server.js to test out Express routes I wrote. To make life easier, we run the server.js using Nodemon that will re-start the server.js for every changes we made.
If the link works, Postman will get actual response from the remote DB, with HTTP 200 with JSON format response(if available).

### Software tools:
Git, Heroku CLI, Postman, NPM

### Organization:
- server.js

Server side of the app. We setup Mongoose connection, routes we will be using and localhost port. It also specify the location of client's side entry point of the app during development and build.
- models folder

MongoDB schemas
- routes/api

Express route(s) use for each schema
- config folder

Mongoose setup key from Atlas

- client folder

The client side of the app where React is use.
- Entry point: index.js
It point to App.js file as the main page, since I use multi-pages React, I wrapped the <App/> inside <BrowserRouter> tag, just telling React that this is a multi page.
- App.js

Specify the dom route and link it to ejs files in pages folder.
- components folder

Where all React components are
- reducers, actions folder

Redux's boiler plate
