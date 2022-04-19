import replace from "gulp-replace"; // Поиск и замена
import plumber from "gulp-plumber"; // Слежение за ошибками
import notify from "gulp-notify" // Уведомления об ошибках
import browserSync from "browser-sync"; // Сервер
import shorthand from "gulp-shorthand"; // Показывает размер входященго и выходящего файла
import concat from "gulp-concat"; // Объединение файлов
import newer from "gulp-newer"; // Проверка обновлений файлов
import ifPlugin from "gulp-if"; // Определение режима

// Экспортируем общие плагины
export const plugins = {
	browserSync: browserSync,
	replace: replace,
	plumber: plumber,
	notify: notify,
	shorthand: shorthand,
	concat: concat,
	newer: newer,
	if: ifPlugin
}