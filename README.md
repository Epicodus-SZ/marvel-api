Step by step guide to creating a new web app project (or you could just use yeoman!)

Prerequisites:
  - GIT
  - NodeJS
  - Bower

1. Create a folder and go into it
2. Run `git init`
3. copy .gitignore into the folder from using `curl "https://raw.githubusercontent.com/Epicodus-SZ/js-calculator/master/.gitignore" -o ".gitignore"`
4. Create a new github repository, and copy the URL
5. Create a link between your folder and github using `git remote add <YOUR INITIALS> https://github.com/<YOUR REPO>.git`
6. run `npm init`...and add your info to package.json.
7. run `bower init`...and add your info into bower.json.
8. Copy the devDependencies section of a previous projects package.json [example] (https://raw.githubusercontent.com/Epicodus-SZ/js-calculator/master/package.json) and paste them into the new projects package.json file.
9. Run `npm install` - to install all of those dependencies into your new project.
10. Copy the dependencies section from a previous bower.json file [example](https://raw.githubusercontent.com/Epicodus-SZ/js-calculator/master/bower.json), and paste them into your new projects bower.json file.
11.  To get API key to use in this app, register at the website.
12.  Create .env file in the root/top level of the project.
13.  Add .env file in the .gitignore file.
14.  May need to install "Allow-Control-Allow-Origin:" extension to Chrome to have the API key to work.


Gulp Serve runs - browserSync (a server)
1. jsBuild: reloads the page
2. jsBrowserify - makes Node code work in the browser
2a. concatInterface: combines all the interface-js files into a single file
3. jshint - linter that checks code for errors
4. bower -
4a. bowerJS - takes the vendor JavaScript and combines all vendor JavaScripts into vendor.min.js
4b. bowerCSS - takes the vendor CSS and combines all vendor CSS into vendor.css
5.  Watches for changes in the js folder, bower.json, all html, and .scss, and then runs the corresponding tasks if there are any changes.


Gulp Build runs -
1. clean: deletes the build and tmp folders
2. jsBrowserify - makes Node code work in the browser
3. bower -
3a. bowerJS - takes the vendor JavaScript and combines all vendor JavaScripts into vendor.min.js
3b. bowerCSS - takes the vendor CSS and combines all vendor CSS into vendor.css
4. cssBuild - turns scss files and converts them to css
