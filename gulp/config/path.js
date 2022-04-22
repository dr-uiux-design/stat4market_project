// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist'; // папка продакшена
const srcFolder = './src'; // папка с файлами в разработке

// Пути к файлам из рабочей папки
export const path = {
	build: {
    files: `${buildFolder}/`,
		html: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
		js: `${buildFolder}/js/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		fontIcons: `${buildFolder}/fonts/font-icons/`
	}, // папка с результатом
	src: {
		files: `${srcFolder}/files/**/*.*`,
		html: `${srcFolder}/html/*.html`,
		scss: `${srcFolder}/scss/*.{sass,scss}`,
		js: `${srcFolder}/js/*.js`,
		images: `${srcFolder}/img/*.{png,jpg,jpeg,gif, webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		fonts: `${srcFolder}/fonts/*.{eot,ttf,otf,otc,woff,woff2,svg}`,
		fontSrc: `${srcFolder}/fonts/_local-fonts.scss`,
		fontIcons: `${srcFolder}/fonts/font-icons/*.{eot,ttf,otf,otc,woff,woff2,svg}`,
		spriteSvg: `${srcFolder}/img/_svg/*.svg`,
	}, // папка с исходниками
	watch: {
		files: `${srcFolder}/files/**/*.*`,
		html: [`${srcFolder}/html/**/*.html`, `${srcFolder}/components/**/*.html`],
		scss: [`${srcFolder}/scss/**/*.{sass,scss}`, `${srcFolder}/components/**/*.{sass,scss}`],
		js: [`${srcFolder}/js/**/*.js`, `${srcFolder}/components/**/*.js`],
		images: `${srcFolder}/img/**/*.{png,jpg,jpeg,gif,svg,ico,webp}`,
		fonts: `${srcFolder}/fonts/**/*.{eot,ttf,otf,otc,woff,woff2,svg}`,
		spriteSvg: `${srcFolder}/img/_svg/**/*.svg`,
	}, // слежение за изминениями
	clean: buildFolder, // удаление папки с результатом
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ''
};
