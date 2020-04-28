// development config
const { resolve } = require("path");
const merge = require("webpack-merge");
const webpack = require("webpack");
const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "development",
  entry: [
    "webpack-dev-server/client?http://localhost:8080", // bundle the client for webpack-dev-server and connect to the provided endpoint
    "webpack/hot/only-dev-server", // bundle the client for hot reloading, only- means to only hot reload for successful updates
    "./index.tsx" // the entry point of our app
  ],
  devServer: {
    hot: true, // enable HMR on the server,
    historyApiFallback: true,
    host: "localhost", // Need to listen to all requests on all addresses: https://stackoverflow.com/questions/56759017/cannot-open-a-react-app-in-the-browser-after-dockerising
    port: 8080
  },
  devtool: "cheap-module-eval-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin() // prints more readable module names in the browser console on HMR updates
  ],
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  resolve: {
    alias: {
      react: resolve("./node_modules/react"),
      "@material-ui/styles": resolve("./node_modules/@material-ui/styles")
    }
  }
});
