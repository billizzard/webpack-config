const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

conf = {
	// чтобы в entry не писать постоянно src для всех энтрипоинтов, можно писать так
	context: __dirname + '/src',
  entry: {
     app: './index.js',
     //print: './src/print.js'
  },
  plugins: [
  	// чтобы не создавал файлы в директории если появились ошибки какие-то
  	new webpack.NoEmitOnErrorsPlugin﻿(),
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
    publicPath: 'dist/',
    // будет доступ извне к модулю собранному, через эту переменную home
    library: 'home',
  },
  module: {
     rules: [
       {
       	 // используется для нахождения файлов
       	 //test: /\.js$/,
       	 loader: 'babel-loader',
       	 // тоже самое что и test но для папок
       	 include: [path.resolve(__dirname, "src/js/public")],
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

// как webpack будет искать модули, у него по умолчанию много папок, поэтому чтобы ускорить сборку, можно оставить только одну
// и расширения тоже сократить
   resolve: {
   	modules: ['node_modules'],
   	extensions: ['*', '.js'],
   },

// тоже самое что и resolve, только для лоадеров
// moduleExtensions: *-loader - позволяет указывать вместо скажем babel-loader, просто babel, а настройка * принимает все как есть
// т.е. позволяет объявлять как babel-loader
   resolveLoader: {
   	modules: ['node_modules'],
   	moduleExtensions: ['*-loader', '*'],
   	extensions: ['*', '.js'],
   },

     
    //new webpack.optimize.CommonsChunkPlugin({
    	// имя файла
    	//name: "common",
    	// по умолчанию, чтобы плагин вынес общий код, он должен присутствовать во всех точках входа, если в хоть
    	// одной не присутствует, то это не вынесется в отдельный код. 
    	// этой опцией мы задаем, в скольки минимум файлах должен присутствовать общий код
    	//minChunks: 2,
    	// также можем явно указать, что общее нужно брать только из определенных точек входа
    	// chunks: ['app', 'print'],

    	// если нужно еще с нескольих файлов собрать общее, можно еще один такой же плагин создать, только имя должно быть другое
    //})

   optimization: {
   		// выделяет общее в точках сборки и выносит в отдельный файл
	    splitChunks: {
	    	// по умолчанию, чтобы плагин вынес общий код, он должен присутствовать во всех точках входа, если в хоть
	    	// одной не присутствует, то это не вынесется в отдельный код. 
	    	// этой опцией мы задаем, в скольки минимум файлах должен присутствовать общий код
	      minChunks: 1,
	      // имя, если true будет автоматом задаваться, если нет то можно функцию прописать которая будет раздавать имена
	      name: true,
	      // также можем явно указать, что общее нужно брать только из определенных точек входа
	      chunks: 'all',
	    }
	}

   // будет следить за файлами и пересобирать проект по сохранению
   // также используется кэш при пересборке, и она происходит быстрее чем руками
   //watch: true,

	// после сохранения файла ждет 100 милисекунд, чтобы пересобрать, так как прграммы могут еще
	// что-то сохранять после сохранения, по умолчанию 300, но 100 обычно достаточно, тем самым ускоряем пересборку 
   // watchOptions: {
   // 		aggregateTimeout: 100,
   // }

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
	// conf.devtool = production ? 'source-map' : 'eval-sourcemap'

	// вообще в проде можно не использовать соурс мап вообще
	conf.devtool = production ? false : 'eval-sourcemap'
	//conf.watch = !production;

	if (!conf.optimization) {
		conf.optimization = {};
	}

	conf.optimization.minimizer = [
		new UglifyJsPlugin({
			uglifyOptions: {
				compress: {
					warnings: false,
					drop_console: true,
					unsafe: true,
				},
			}
		})
	];
	
	return conf;
}