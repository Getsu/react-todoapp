const path = require("path"); // path モジュールの読み込み

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  module: {
    rules: [
      // CSSファイルの読み込み
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIndentName: "[name]__[local]___[hash:base64:5]",
              },
            },
          },
        ],
      },
    ],
  },
};
