import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

module.exports = {
  context: path.join(__dirname, "./"),
  mode: "development",
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src"),
    },
    extensions: [".js", ".ts", ".tsx"],
  },
  target: "web",
  entry: {
    app: ["regenerator-runtime/runtime", "./src/index.tsx"]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "all",
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
        },
      },
    },
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
    }),
  ],
  devtool: "inline-source-map",
};
