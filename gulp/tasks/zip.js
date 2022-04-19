import del from "del";
import zipPlugin from "gulp-zip"; // Создаем zip архив с папкой проекта

export const zip = () => {
	del(`./${app.path.rootFolder}.zip`)
	return app.gulp.src(`./${app.path.buildFolder}/**/*.*`, {})
		.pipe(app.plugins.plumber({
			errorHandler: app.plugins.notify.onError(error => ({
				title: "ZIP",
				message: "Error: <%= error.message %>"
			}))
		}))
		.pipe(zipPlugin(`${app.path.rootFolder}.zip`))
		.pipe(app.gulp.dest('./'));
}