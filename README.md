# Graphql
- npm init --yes
- npm i --save-dev @babel/core @babel/cli @babel/node @babel/preset-node 
- npm i express graphql
- npm i nodemon
Add "type": "module" to load an ES5 module or create a babelrc file
- npm i express-graphql

## This project used buildSchema method for creating schemas. There are other method like makeExecutable and graphql. Check docs for more details.

For older versions of babel use "npm i --save-dev babel-cli babel-preset-env babel-preset-stage-0"

- RUN npm start to start the server
- RUN npm run build to build using babel