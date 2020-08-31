const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js", // CDN
  },
  output: {
    path: path.resolve(__dirname + "/../", "dist"),
    filename: "web-form-core.js", //CDN
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
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
