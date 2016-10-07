This project is a walkthrough to build a webapp with node.js and express 4.0. The major things to be implemented in this are
1. node and npm
2. setting up gulp
3. templating engines
4. routing
5. databases

Different tools will be used, which I'll describe more descriptively in the above mentioned pattern.

So, what is Node.js ?

Uses JS language.
It is an open source, server side, runtime environment (wrapper around JS language).
Cross platform (Can run JS code in windows,linux,OSX)

What is express ?

It is a web development framework for Node.js.
It's light weight, unopinionated & minimalistic. It handles routing, page rendering.
Ultimately it's an NPM package.
We'll write code using express objects.

Now, Install node.js from nodejs.org
---- node and npm --------------------------------------------------------------------------------
All of our application is just one JS file that gets executed.
By executing command
node app.js     // pulls stuff from other files, runs the whole app by running this command

What is NPM ?

It's a package management system for node.js. We'll use lot of them here such as express, gulp, body parser, loadash. It supports easy updates and version management. 

Run npm init    // setsup NPM in our application, creates package.json file (the use of this file is to keep track of all dependencies installed for our application).

npm install express --save  // install's express & save is used so that it shows up in package.json

Versioning of packages  // 3 types
1."^4.xx.x"
2."~4.13.x"
3."4.13.3"
---- Setting up Express --------------------------------------------------------------------------
Here we'll checkout about how
1. express is configured
2. simple routing
3. bootstrap template
4. Bower

1---> pull express in app.js, listen to a port on the machine & run callback function.

To kickoff the server, instead of using node app.js we can use something like node start so that others who are using my app need not worry about the main file. This can be done by adding a script in package.json to replace the above command. Pretty easy :)

2---> checkout the documentation of express
3---> downloaded a bootstrap template which suit my needs from different templates available.
4---> install bower using npm. Justlike npm/package.json is for backend, bower/bower.json is for frontend. Makes installing different versions of bootstrap,jquery.. easier.
---- Setting up Gulp -----------------------------------------------------------------------------
We can replace doing monotonmous tasks like starting server and checking for every changes we make, pulling bower packages, setup coding standards like JSHint, inject CSS & JS references into our html file using wiredep & auto restart our application whenever changes are made.
1--->Gulp: Task manager for web projects.// installed with npm, code based configuration, package based.
2--->JSHint: To enforce coding standards, open source.
JSCS: This is for checking code style implementation, also open source.
These(gulp,jscs,jshint) have to be setup in our local environment so that everyone coding can follow particular pattern but these are not necessary when in production as it saves some code and time. So has to be setup accordingly.
Use npm install gulp --save-dev // adds a dev dependencies folder in package.json

3--->code configure gulp so that it does autonomous stuff.
--- Templating Engines ----------------------------------------------------------------------------
What is a Templating engine ?
Allows Express to build HTML pages for us, that way we can embed information pulled out from an API or DB into the page. There are couple of them.
1. Jade // templating engine that has to be compiled
2. Handlebars   // another type, works a bit differently than Jade
3. EJS  // another type, depending on the environment we work we can choose among the above, here we'll use this.
ents have to be indented properly using 'tab' for the compiler to understand.
Before setting up any templating engine, we should tell express where we'll store all our views.
Jade also operates on JS

2--->Handlebars // minimalist templating engine, writing stuff like Jade can be too much for some. This looks a lot like HTML and if used angular previously then looks lot similar in implementation.
--- Routing ---------------------------------------------------------------------------------------
Instead of using manual get methods for each and every link, we can use router to setup all the routes of particular link in that respective route itself.All we have to do is create the router, define it & tell the app which one's we're going to use.
It can be overwhelming to write down the code for all routes in one file. We can place all the routes in a different file.
----Data base -------------------------------------------------------------------------------------
We'll hook up our web application with couple of DB's. We'll use Azure instance of SQL server(for local instances can use SQL express also) and native MongoDB.
Install mongoDB, start mongod server and then mongod in a different command prompt to view the DB's. It's necessary that we have a data/DB folder in our C; to avoid getting any errors. To populate our DB's and integrate with our Web app lets add Admin routes

---Authentication ---------------------------------------------------------------------------------
Have to create users and admin, so that each can log in with username and password with admin having extra privileages. So should handle authentication and authorization. Will be using passport framework for these.
We use body parser to get data posted in our web page and sets it up as a nice JSON object. It operates as a middle ware. Just like we used app.use() previously.
So to use passport for simple authentication we need to setup passport.initialize, passport.session() [ to place user object into the session & pull it out of the session ], express.session [passport session sits on top of express session]
