import webpackStream from 'webpack-stream'
import webpack       from 'webpack'
import TerserPlugin from "terser-webpack-plugin";
// import uglify from "gulp-uglify";

export const js = () => {
	return app.gulp.src(app.path.src.js, {
			sourcemaps: app.isDev
		})
		.pipe(app.plugins.plumber({
			errorHandler: app.plugins.notify.onError(error => ({
				title: "JS",
				message: "Error: <%= error.message %>"
			}))
		}))
		.pipe(webpackStream({
			mode: app.isProd ? 'production' : 'development',
			output: {
				filename: 'main.min.js',
			},
			performance: {
				hints: false
			},
			plugins: [
				new webpack.ProvidePlugin({
					$: 'jquery',
					jQuery: 'jquery',
					'window.jQuery': 'jquery'
				}), // jQuery (npm i jquery)
			],
			module: {
				rules: [{
					test: /\.m?js$/,
					exclude: /(node_modules)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
							plugins: ['babel-plugin-root-import']
						}
					}
				}]
			},
			optimization: {
				minimize: true, // минификация
				minimizer: [
					new TerserPlugin({
						terserOptions: {
							format: {
								comments: false
							}
						},
						extractComments: false
					})
				]
			}
		}))
		.on('error', function (err) {
			console.error('WEBPACK ERROR', err);
			this.emit('end');
		})
		.pipe(app.gulp.dest(app.path.build.js, {
			sourcemaps: app.isDev
		})) // переносим файлы
		.pipe(app.plugins.browserSync.stream());
}
