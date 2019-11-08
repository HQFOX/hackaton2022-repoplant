// shared config (dev and prod)
const { resolve } = require("path");
const { CheckerPlugin } = require("awesome-typescript-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const BASE_PATH = resolve(__dirname, "../..");

module.exports = {
  resolve: {
    extensions: [".json", ".js", ".jsx", ".ts", ".tsx"],
    plugins: [
      new TsconfigPathsPlugin({ configFile: `${BASE_PATH}/tsconfig.json` }),
    ],
  },
  context: `${BASE_PATH}/src`,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "source-map-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        use: ["babel-loader", "awesome-typescript-loader"],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false",
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.svg$/,
        exclude: [/src/, /assets/],
        use: ["file-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
