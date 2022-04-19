// Плагины
import cheerio from "gulp-cheerio";
import svgmin from "gulp-svgmin";
import svgsprite from "gulp-svg-sprite";

export const spriteSvg = () => {
	return app.gulp.src(`${app.path.src.spriteSvg}`)
		.pipe(app.plugins.plumber({
			errorHandler: app.plugins.notify.onError(error => ({
				title: "Sprite",
				message: "Error: <%= error.message %>"
			}))
		}))
		.pipe(app.plugins.newer(app.path.build.images))
		.pipe(
			svgmin({
				js2svg: {
					pretty: true,
				},
			})
		)
		.pipe(
			cheerio({
				run: function ($) {
					$('[fill]').removeAttr('fill');
					$('[stroke]').removeAttr('stroke');
					$('[style]').removeAttr('style');
				},
				parserOptions: {
					xmlMode: true
				},
			})
		)
		.pipe(svgsprite({
			mode: {
				stack: {
					sprite: `../svg-sprite.svg`,
					example: false // создавать страницу с превью иконок
				}
			}
		}))
		.pipe(app.gulp.dest(`${app.path.build.images}`))
		.pipe(app.plugins.browserSync.stream());
}
