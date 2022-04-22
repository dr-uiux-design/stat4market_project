// Основной модуль
import gulp from "gulp";

// Импорт путей
import { path } from "./gulp/config/path.js" ;

// Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

// Передаем значение в глобальную переменную
global.app = {
	isProd: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path: path,
	gulp: gulp,
	plugins: plugins
}

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { clean } from "./gulp/tasks/clean.js" ;
import { html } from "./gulp/tasks/html.js" ;
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js" ;
import { images } from "./gulp/tasks/images.js" ;
import { fontTTF, fontWoff, fontWoff2, fontIcons } from "./gulp/tasks/fonts.js" ;
import { spriteSvg } from "./gulp/tasks/spriteSvg.js" ;
import { server } from "./gulp/tasks/server.js" ;
import { zip } from "./gulp/tasks/zip.js";


// Наблюдение за файлами
function watcher() {
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.images, images);
	gulp.watch(path.watch.images, spriteSvg);
}

// Запуск задач по отдельности gulp название
export { watcher }
export { html }
export { scss }
export { js }
export { images }
export { clean } // Удаление папки dist
export { spriteSvg } // Генерирование SVG Sprite

// Генерация шрифтов в разные форматы
export { fontTTF } // otf в ttf
export { fontWoff } // ttf + woff
export { fontWoff2 } // ttf в woff2
export { fontIcons } // перенос шрифтовых иконок в папку fonts

// Нужный формат подставить в mainTasks (по умолчанию woff2)
// fontWoff
// fontWoff2

const mainTasks = gulp.series(fontWoff2, fontIcons, gulp.parallel(copy, html, scss, js, images, spriteSvg));

// Построение сценариев выполнения задач
const dev = gulp.series(clean, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(clean, mainTasks);
const deployZIP = gulp.series(clean, mainTasks, zip);

// Экспорт сценариев
export { dev }
export { build }
export { deployZIP }

// Выполнение сценария по умолчанию
gulp.task('default', dev);
