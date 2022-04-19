// Плагины
import imagemin from "gulp-imagemin"; // оптимизация изображений
import webp from "gulp-webp"; // преобразование в webp формат

export const images = () => {
	return app.gulp.src(app.path.src.images)
		.pipe(app.plugins.plumber({
			errorHandler: app.plugins.notify.onError(error => ({
				title: "Images",
				message: "Error: <%= error.message %>"
			}))
		}))
		.pipe(app.plugins.newer(app.path.build.images))
		.pipe(
			app.plugins.if(
				app.isProd,
				webp()
			)
		)
		.pipe(
			app.plugins.if(
				app.isProd,
				app.gulp.dest(app.path.build.images)
			)
		)
		.pipe(
			app.plugins.if(
				app.isProd,
				app.gulp.src(app.path.src.images)
			)
		)
		.pipe(
			app.plugins.if(
				app.isProd,
				app.plugins.newer(app.path.build.images)
			)
		)
		.pipe(
			app.plugins.if(
				app.isProd,
				imagemin({
					progressive: true,
					svgoPlugins: [{
						removeViewBox: false
					}],
					interlaced: true,
					optimizationLevel: 2 // 0 to 7
				})
			)
		)
		.pipe(app.gulp.dest(app.path.build.images)) // переносим файлы
		.pipe(app.gulp.src(app.path.src.svg))
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.plugins.browserSync.stream());
}