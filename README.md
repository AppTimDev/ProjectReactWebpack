
# Home Page (React)
## This project is used to create my home page for the react js version.

It mainly focuses on the front end environment for building a react js single page application (SPA). 

It uses webpack5 to bundle the whole project and optimize for the best performance. 

It also provides a way to show a simple responsive web design that can adjust for different screen sizes and viewports.

---

## Environment:
- Windows 10

- node 16.13.2
- npm 8.1.2
- nvm 1.1.7
- webpack: 5.74.0
- version of node modules (refer to package.json)

---

## Installation
### `Nvm`, `Node`
Install nvm for window users
1. Go to https://github.com/coreybutler/nvm-windows/releases

Install node version 16.13.2
```cmd
nvm install 16.13.2
```

Change to node version 16.13.2
```cmd
nvm use 16.13.2
```

### `Webpack`
```cmd
npm i -g webpack
npm i -g webpack-cli
```

### `Node modules`
```cmd
npm i
```

Full details:
```cmd
npm i --save-dev webpack webpack-cli webpack-dev-server 
npm i --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
npm i --save-dev css-loader sass-loader sass file-loader mini-css-extract-plugin html-webpack-plugin
npm i --save-dev @svgr/webpack
npm i --save-dev copy-webpack-plugin 

npm i --save react react-dom react-router-dom
```

---

## Usage

### `npm run dev`
Runs the app in development mode and the dev server (Port 3000).

Open http://localhost:8080 to view it in the browser

### `npm run build`
Builds for production to the dest folder.

It bundles the app in production mode and optimizes the build for the best performance.

---

## Version
### Check the version for node, npm, nvm
#### Node
```cmd
node -v
npm -v
nvm version
```

#### Webpack
```cmd
webpack -v
webpack: 5.74.0
webpack-cli: 4.10.0
webpack-dev-server 4.11.1
```

#### List all the node packages
```cmd
npm list 
```
or list one package

```cmd
npm list webpack
```

#### List the installed version of node and all latest versions.
```cmd
nvm list
nvm list available
```
