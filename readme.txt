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
