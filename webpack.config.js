const path = require("path");

module.exports = {
  entry: {
    v1_actions: "./src/_js/v1_actions.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build/js"),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
