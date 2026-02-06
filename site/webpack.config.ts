import path from 'path';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const isDevelopment = process.env.NODE_ENV !== 'production';

const config: webpack.Configuration = {
  mode: isDevelopment ? 'development' : 'production',
  entry: isDevelopment
    ? [
        'webpack-hot-middleware/client?reload=true',
        './views/scripts/index.ts'
      ]
    : './views/scripts/index.ts',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.client.json'
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: {
                // Don't process URLs that start with /
                filter: (url: string) => !url.startsWith('/')
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: {
                // Don't process URLs that start with /
                filter: (url: string) => !url.startsWith('/')
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    ...(isDevelopment
      ? [new webpack.HotModuleReplacementPlugin()]
      : [new MiniCssExtractPlugin({ filename: 'styles.css' })])
  ],
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss', '.css']
  }
};

export default config;
