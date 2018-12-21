const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
	entry:'./js/app.js',
		

	
	output: {
		// mode:'development',
		path: path.join(__dirname,'dist'),
		filename: 'bundle.js'
	},

	devServer: {
    	port: 8080
  	},

  	module: {
    rules: [
      
      {
        test: /\.css$/,
        use: 
           	[MiniCssExtractPlugin.loader,
          
          	{
          		loader: 'css-loader',
          		options: {
          			minimize: true
          		}
          	}]
      },

      // {
 
      // 	test: /\.(jpe?g|png)$/i,
      //   use :
	     //    {
	     //    	loader: 'responsive-loader',
	     //    	options: {
	     //      		sizes : 300,
	     //      		name: 'images/[name]-[width].[ext]'
	     //    	}
	     //    }
      // },
      
      

      {
      	test: /\.(png|jpe?g)$/i,
      	use: [
	      		{
	      			loader: 'file-loader',
	      			options: {
	      				// name: 'images/[name]-[width].[ext]',
	      				// sizes: [100 , 200 , 300 , 400]
	      			}
	      		},
	      		{
	      			loader: 'image-webpack-loader',
	      			options: {
	      				bypassOnDebug : true
	      			}
	      				
	      		}
	      		
	      	 ]	
	      			
      }


    ]},


    plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html',
      minify   : {
    html5                          : true,
    collapseWhitespace             : true,
    minifyCSS                      : true,
    minifyJS                       : true,
    minifyURLs                     : false,
    removeAttributeQuotes          : true,
    removeComments                 : true,
    removeEmptyAttributes          : true,
    removeOptionalTags             : true,
    removeRedundantAttributes      : true,
    removeScriptTypeAttributes     : true,
    removeStyleLinkTypeAttributese : true,
    useShortDoctype                : true
  }
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "style.css",
      chunkFilename: "[id].css"
    }),
  	]

}