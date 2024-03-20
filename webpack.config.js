const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  // Use env.<YOUR VARIABLE> here:
  console.log("Goal: ", env.goal); // 'local'
  console.log("Production: ", env.production); // true

  return {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, "src", "index.ts"),
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
    ],
  };
};
