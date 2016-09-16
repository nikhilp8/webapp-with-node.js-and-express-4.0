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


