// Плагины
import dartSass from "sass";
import gulpSass from "gulp-sass";
import sassGlob from "gulp-sass-glob"; // Сокращает подключение файлов
import rename from "gulp-rename"; // переименование файла
import groupCssMediaQueries from "gulp-group-css-media-queries"; // Объединяет медиа запросы
import webpCSS from "gulp-webpcss"; // Вывод WEBP изображений в CSS
import autoprefixer from "gulp-autoprefixer"; // Вендорные префиксы
import cleancss from "gulp-clean-css"; // Сжатие CSS

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, {
      sourcemaps: app.isDev
    })
    .pipe(app.plugins.plumber({
      errorHandler: app.plugins.notify.onError(error => ({
        title: "SCSS",
        message: "Error: <%= error.message %>"
      }))
    }))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(sassGlob())
    .pipe(sass({
      outputStyle: 'expanded' // несжатый css
    }))
    .pipe(
      app.plugins.if(
        app.isProd,
        groupCssMediaQueries()
      )
    )
    .pipe(
      app.plugins.if(
        app.isProd,
        autoprefixer({
          grid: true,
          overrideBrowserslist: ["last 5 versions"],
          cascade: true
        })
      )
    )
    .pipe(
      app.plugins.if(
        app.isProd,
        webpCSS({
          webpClass: ".webp",
          noWebpClass: ".no-webp"
        })
      )
    )
    // Раскоментировать если нужен не сжатый дубль файла стилей
    // .pipe(app.gulp.dest(app.path.build.css))
    .pipe(
      app.plugins.if(
        app.isProd,
        cleancss({
          level: 2
        })
      )
    )
    .pipe(rename({
      extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css, {
      sourcemaps: app.isDev
    })) // переносим файлы
    .pipe(app.plugins.browserSync.stream());
}
