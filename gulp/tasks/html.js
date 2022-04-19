// Плагины
import fileinclude from "gulp-file-include"; // включение частей в html @include
import size from "gulp-size"; // сообщения в терминале
import typograf from "gulp-typograf"; // Тайпограф
import webpHtmlNosvg from "gulp-webp-html-nosvg"; // автоматическая вставка webp в html
import versionNumber from "gulp-version-number"; // чистит кэш
import htmlmin from "gulp-htmlmin"; // минификация html

export const html = () => {
	return app.gulp.src(app.path.src.html) // получаем файлы
		.pipe(app.plugins.plumber({
			errorHandler: app.plugins.notify.onError(error => ({
				title: "HTML",
				message: "Error: <%= error.message %>"
			}))
		}))
		.pipe(size({
			title: "Start HTML"
		}))
		.pipe(fileinclude({
			prefix: '@',
			basepath: '@file'
		}))
		.pipe(app.plugins.replace(/@img\//g, 'img/'))
		.pipe(
			app.plugins.if(
				app.isProd,
				webpHtmlNosvg()
			)
		)
		.pipe(
			app.plugins.if(
				app.isProd,
				versionNumber({
					'value': '%DT%',
					'cover': 0,
					'append': {
						'key': '_v',
						'to': ['css', 'js'],
						'output': {
							'file': 'gulp/version.json'
						}
					}
				})
			)
		)
		.pipe(typograf({
			locale: ['ru', 'en-US']
		}))
		.pipe(
			app.plugins.if(
				app.isProd,
				htmlmin({
					collapseWhitespace: true
				})
			)
		)
		.pipe(size({
			title: "End HTML"
		}))
		.pipe(app.gulp.dest(app.path.build.html)) // переносим файлы
		.pipe(app.plugins.browserSync.stream());
}