export const copy = () => {
	return app.gulp.src(app.path.src.files) // получаем файлы
		.pipe(app.gulp.dest(app.path.build.files)) // переносим файлы
}