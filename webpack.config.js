const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

conf = {
  entry: {
     app: './src/index.js',
     print: './src/print.js'
  },
  plugins: [
  	// выходной файл стилей будет таким
  	new ExtractTextPlugin("styles.css"),
     //new CleanWebpackPlugin(['dist'])
  ],
  output: {
    filename: '[name].bundle.js',
    // обсалютный путь к папке dist
    path: path.resolve(__dirname, 'dist'),
    // нужен иногда, для дев сервера например, чтобы знал с какой папки подтягивать файлы, так как это
    // относительный путь, т.е. он будет добавлять сюда имя файла на сайте и подгружать файл
    publicPath: 'dist/'
  },
  module: {
     rules: [
       {
       	 test: /\.js$/,
       	 loader: 'babel-loader',
       	 // исключает обработку библиотек из node_moduels, но если всеже там есть файлы с новыми 
       	 // стандартами, то можно это закоментить, так как обрабатывать нужно будет
       	 exclude: '/node_modules/'
       },
       {
         test: /\.s?css$/,
         use: ExtractTextPlugin.extract({
         	// отменяет style-loader, по сути тут не нужно, так как мы его не подключаем
        	fallback: 'style-loader',
	        use: [
	          { loader: "css-loader" },     
	          { 
	            loader: "sass-loader",
	            // options: {
	            //   includePaths: [
	            //     path.resolve("./src/css")
	            //   ]
	            // }
	          },
	        ]
      	}),
         // use: [
         // 	// просто считывает данные из файла без интерпритации
         //   'style-loader',
         //   // заносит в файл
         //   'css-loader',
         //   'sass-loader'
         // ]
       },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           {
           	loader: 'file-loader',
           	options: {
           		name: '[path][name].[ext]',
           		outputPath: 'images/',
           		publicPath: 'images/'
           	}
           }
         ]
       },
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader'
         ]
       }
     ]
   },
   // для консоли оставляет нормальный код, чтобы можно было посмотреть строку или оставить брекпоинт
   // в не откомпиленном файле, добавляю ее в не продакшн моде ниже
   //devtool: 'eval-sourcemap'
};

module.exports = (env, options) => {
	let production = options.mode === 'production';

	// если прод, то в отдельный файл источнк, иначе в этот же, чтобы было удобнее
	// вообще в проде можно не использовать соурс мап вообще
	// source-map будет складывать в отдельные файлы
	// eval-sourcemap будет в тот же файл складывать
	//conf.devtool = production ? 'source-map' : 'eval-sourcemap'

	// вообще в проде можно не использовать соурс мап вообще
	conf.devtool = production ? false : 'eval-sourcemap'
	
	return conf;
}