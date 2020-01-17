App name: estiMate
https://blooming-gorge-91386.herokuapp.com/

Description:
An app that can help estimate your house/building construction cost.

Objective:
I wanted to learn developing a web-app using framework and a non-SQL database.

Tech stack:
I am using MERN stack that stands for:
- MongoDB
I am using MongoDB Atlas as a remote server which is free. To communicate with the database I use Mongoose a NPM package. Atlas provide a 'key' to help setup the connection with Mongoose. We provide DB schema(s) to Mongoose and it will treat is as an object. Mongoose also provide all queries as ready to use functions that takes parameters and returning responses, works perfectly with schema object.
- Express
Express is a part of Node.js default package that decoupling server and client part of an app. It act kind of like PHP that will execute Mongoose async queries and handle responses. Express route is called by Redux in client side. Express will return responses to Redux, and Redux will store it to variable.
- React
React is a front end framework that builds a web page with component(s). 
It is easier to update a component that exist in multiple pages. For example when we wanted to update a navbar, in traditional HTML page we have to go through each page and update navbar component one by one. 
React also make it easier to create a HTML element just like using HTML tags, unlike in JS where we have to use createElement function and specify its parent element and need another function to specify it's parameters.
Each React component has it's own set of variable called state. It was quite hard to understand how to pass value(s) between component at first and it will get easier and make more sense as we get used to is.
I choose React as it will be easier to further develop my app for mobile platform by adding React-native on top of it.
- Redux
Redux is another back end framework that help managing and storing data between components. Express responses will be pass and distribute through Redux (like a global variable to components that calls it). It was quite hard to understand and to setup at first as it require a large boiler plate with many js files to setup. When the boiler plate out of the way, I can trace how the files communicate with one another and it is easier to understand after that.
- React-route-dom
To develop a multi page React app we need a route dom, that basically tell React that we have multiple pages. React will load appropiate page when a route address is called.
- Node.JS
Node.JS is a framework that help with web-app development. It comes with NPM a package manager. Thru it we can install packages we need to develop an app. Node.JS will record all packages we use in the development process in package.json manifest file. We can specify development and deployment commands in package.json.
I deployed the app to Heroku cloud platform using Heroku CLI and Git. Rather than building the app in my local machine and uploading Node package modules, thru package.json 'heroku-postbuild' entry, I can tell Heroku to build and get all the needed packages on the Heroku server.

Building:
I am using VS Code IDE to develop the app. The IDE it self is 'neutral' and needs to be setup first by downloading related modules that can help with certain development. I already comfortable using this IDE for web-app development, especially it has a powershell build-in to it. I needs it to execute NPM, Git, Heroku CLI command.
Using NPM makes our work easier, to run the app I just need to execute 'npm run dev' in the powershell. We specify that command in the package.json file. Since we are using Express that have server and client side, we need 'concurrently' package that can run both server and client side of the app on localhost in one line.
I already prepared a users schema for login feature with a route that handle create new user in the DB.
To styling the page, I use Reactstrap a bootstrap package for React.

Testing:
Testing was done manually through out the development process. I use Postman app to test my Express route queries.
To start the server I need to execute 'npm run server'. This will run server.js to test out Express routes I wrote. To make life easier, we run the server.js using Nodemon that will re-start the server.js for every changes we made.
If the link works, Postman will get actual response from the remote DB, with HTTP 200 with JSON format response(if available).

Software tools:
Git, Heroku CLI, Postman, NPM

Organization:
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