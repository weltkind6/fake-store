import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

type Mode = 'production' | 'development'

interface EnvVariables {
  mode: Mode
  port: number
}

const getEntryConfig = () => {
  return path.resolve(__dirname, "src", "index.tsx");
};

const getOutputConfig = () => {
  return {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    clean: true,
  };
};

const getPluginsConfig = () => {
  return [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    })
  ];
};

const getModuleConfig = () => {

  const webpackAssetsLoader =  {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  }

  return {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      webpackAssetsLoader
    ],
  };
};

const getResolveConfig = () => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  };
};

const getDevServerConfig = (env: EnvVariables) => {
  return {
    port: env.port ?? 3000,
    open: true
  };
};

export default (env: EnvVariables) => {
  const config: webpack.Configuration = {
    mode: env.mode ?? 'development',
    entry: getEntryConfig(),
    output: getOutputConfig(),
    plugins: getPluginsConfig(),
    module: getModuleConfig(),
    resolve: getResolveConfig(),
    devtool: 'inline-source-map',
    devServer: getDevServerConfig(env)
  };

  return config;
};
