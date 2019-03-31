# React + Webpack + Babel
![Alt text](/src/assets/images/banner.png?raw=true "Coders Tokyo")
### run docker
```
step 1: build images
    docker build . -t react-webpack/dong-nguyen
step 2: start and run container
    docker run 8080:80 react-webpack/dong-nguyen
step 3: open browser. Enter the address "localhost:8080" to browser
FINISH
```
### devDependencies
```
  "devDependencies": {
    "@babel/core": "^7.4.0",
    "@babel/preset-env": "^7.4.2",
    "@babel/preset-react": "^7.0.0",
    "babel-eslint": "^10.0.1",
    "babel-loader": "^8.0.5",
    "chalk": "^2.4.2",
    "css-loader": "^2.1.1",
    "eslint": "^5.16.0",
    "eslint-loader": "^2.1.2",
    "eslint-plugin-react": "^7.12.4",
    "extract-text-webpack-plugin": "^4.0.0-beta.0",
    "file-loader": "^3.0.1",
    "html-webpack-plugin": "^3.2.0",
    "node-sass": "^4.11.0",
    "optimize-css-assets-webpack-plugin": "^5.0.1",
    "ora": "^3.2.0",
    "rimraf": "^2.6.3",
    "sass-loader": "^7.1.0",
    "style-loader": "^0.23.1",
    "url-loader": "^1.1.2",
    "webpack": "^4.29.6",
    "webpack-cli": "^3.3.0",
    "webpack-dev-server": "^3.2.1",
    "webpack-merge": "^4.2.1"
  }
```
