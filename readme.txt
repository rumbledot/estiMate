App name: estiMate

Description:
An app that can help estimate your house/building construction cost.

Objective:
I wanted to learn developing a web-app using framework and a non-SQL database.

Tech stack:
I am using MERN stack that stands for:
- MongoDB
I am using MongoDB Atlas as a remote server which is free. To communicate with the database I use Mongoose a NPM package. Atlas provide a 'key' to help setup the connection with Mongoose. We provide DB schema(s) to Mongoose and it will treat is as an object. Mongoose also provide all queries as functions and works perfectly with schema object.
- Express
Express is a part of Node.js default package that decoupling server and client part of an app. It act kind of like PHP that will execute DB async queries and returning response in JSON format.
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
I am using VS Code IDE to develop the app. The IDE it self is quite neutral and needs to be setup first by downloading related modules that can help with web-app development. I already comfortable using this IDE for web-app development, especially it has a powershell build-in to it. I needs the powershell to execute NPM, Git, Heroku CLI command.
Using NPM makes our work easier, to run the app I just need to execute 'npm run dev' in the powershell. We specify the command in the package.json file. Since we are using Express that have server and client side, we need 'concurrently' package that can run both server and client side of the app on localhost in one command line.

Testing:
Testing was done manually through out the development process. I use Postman app to test my Express route queries.
If the link works, Postman will get actual response from the remote DB, with HTTP 200 with JSON format response(if available).

Software tools:
Git, Heroku CLI, Postman, NPM