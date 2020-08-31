const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: "./index.js",
    // app: "./webForm/index.js", // CDN
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // filename: "web-form-core.js", //CDN
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "webForm"),
        loader: "babel-loader",
        query: {
          presets: ["env"],
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
        ],
      },
    ],
  },
};
