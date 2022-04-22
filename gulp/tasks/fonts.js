// Плагины
import fonter from "gulp-fonter-fix"; // конвертация шрифта otf в ttf, eot, woff, svg
import ttf2woff2 from "gulp-ttf2woff2"; // конвертация шрифта ttf в woff2

export const fontTTF = () => {
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`)
    .pipe(app.plugins.plumber({
      errorHandler: app.plugins.notify.onError(error => ({
        title: "FontsTTF",
        message: "Error: <%= error.message %>"
      }))
    }))
    .pipe(fonter({
      formats: ['ttf']
    }))
    .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts`));
}

export const fontWoff = () => {
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`)
    .pipe(app.plugins.plumber({
      errorHandler: app.plugins.notify.onError(error => ({
        title: "FontWoff",
        message: "Error: <%= error.message %>"
      }))
    }))
    .pipe(app.plugins.newer(app.path.build.fonts))
    .pipe(fonter({
      formats: ['woff']
    }))
    .pipe(app.gulp.dest(`${app.path.build.fonts}`));
}

export const fontWoff2 = () => {
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`)
    .pipe(app.plugins.plumber({
      errorHandler: app.plugins.notify.onError(error => ({
        title: "FontWoff2",
        message: "Error: <%= error.message %>"
      }))
    }))
    .pipe(app.plugins.newer(app.path.build.fonts))
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(`${app.path.build.fonts}`));
}

export const fontIcons = () => {
  return app.gulp.src(`${app.path.srcFolder}/fonts/font-icons/*.{eot,ttf,woff,woff2,svg}`)
    .pipe(app.plugins.plumber({
      errorHandler: app.plugins.notify.onError(error => ({
        title: "Fonts",
        message: "Error: <%= error.message %>"
      }))
    }))
    .pipe(app.plugins.newer(app.path.build.fontIcons))
    .pipe(app.gulp.dest(`${app.path.build.fontIcons}`));
}
