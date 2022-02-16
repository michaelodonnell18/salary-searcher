var path = require("path");
var HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    //entry via server w express routes in server.js file
    entry: "./server/server.js", 
    output: {
        //npm run build for dev version, need to resolve file path below
        path: path.join(__dirname, "build"),
        publicPath: '/build',
        filename: "index_bundle.js"
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
          {
            test: /\.tsx?/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
          //THIS PIECE: is for babel loading and testing requirements, which we can decide if we need or not later on
        //   {
        //     test: /\.jsx?/,
        //     use: {
        //       loader: 'babel-loader',
        //       options: {
        //         presets: ['@babel/preset-env', '@babel/preset-react'],
        //         plugins: ["@babel/plugin-syntax-jsx"]
        //       },
        //     },
        //     exclude: /npm_modules/
        //   },
          {
            //npm install -D sass-loader css-loader style-loader webpack
            // /\.s[ac]ss$/i
            // /\.css /
            test: /\.s?css/,
            use: ["style-loader", "css-loader", "sass-loader"
            ],
          },
          { 
              /*commenting out rules for images since we aren't using any yet!
            // Now we apply rule for images that
            test: /\.(png|jpg|gif|svg)$/,
            use: [
              {
                // Using file-loader for these files
                loader: "file-loader",
                // loader: "url-loader",
                // In options we can set different things like format
                // and directory to save
                options: {
                  outputPath: '/images'
                }
              }
            ]
        */},
          // {
          //   test: /\.(png|jpg)$/,
          //   loader: 'url-loader'
          // },
        ]
    },
    resolve: {
        // Enable importing JS / JSX files without specifying their extension
        extensions: [".js", ".jsx", ".tsx", ".ts"],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, '/server'), //resolving dir name where server lives
        },
      proxy: {
        '/': 'http://localhost:3000'
      },
      compress: true,
      port: 8080,
  },
};