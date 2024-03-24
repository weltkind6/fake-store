import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// set the true/false flag to run BundleAnalyzer
const enableBundleAnalyzer = process.env.ANALYZE_BUNDLE === 'false';


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
  const plugins = [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
  ]

  if (enableBundleAnalyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins
};

const getLoaders = () => {
  const webpackAssetsLoader =  {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  }
  const acceleratedTsLoader = {
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          // Change condition to disable TS check
          transpileOnly: true
        }
      }
    ]
  }
  const importSvgAsComponentLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
    use: ['@svgr/webpack'],
  }
  const cssIndividualFilesLoader = {
    test: /\.s[ac]ss$/i,
    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
  }
  const svgLoader =  {
    test: /\.svg$/i,
    type: 'asset',
    resourceQuery: /url/, // *.svg?url
  }

  return {
    rules: [
      cssIndividualFilesLoader,
      acceleratedTsLoader,
      svgLoader,
      importSvgAsComponentLoader,
      webpackAssetsLoader
    ],
  };
};

const getResolveConfig = () => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': '/src',
    },
  };
};

const getDevServerConfig = (env: EnvVariables) => {
  return {
    port: env.port ?? 3000,
    open: true,
    historyApiFallback: true
  };
};

export default (env: EnvVariables) => {
  const config: webpack.Configuration = {
    mode: env.mode ?? 'development',
    entry: getEntryConfig(),
    output: getOutputConfig(),
    plugins: getPluginsConfig(),
    module: getLoaders(),
    resolve: getResolveConfig(),
    devtool: 'inline-source-map',
    devServer: getDevServerConfig(env)
  };

  return config;
};
