const pathSrc = './src';
const pathDest = './public';

module.exports = {
    root: pathDest,

    html: {
        src: pathSrc + '/**/*.html',
        watch: pathSrc + '/**/*.html',
        dest: pathDest
    },

    scss: {
        src: pathSrc + '/scss/*.scss',
        watch: pathSrc + '/scss/*.scss',
        dest: pathDest + '/css'
    },

    js: {
        src: pathSrc + '/js/*.js',
        watch: pathSrc + '/js/*.js',
        dest: pathDest + '/js'
    },

    img: {
        src: pathSrc + '/img/*.*',
        watch: pathSrc + '/img/*.*',
        dest: pathDest + '/img'
    },

    svg: {
        src: pathSrc + '/img/*.svg',
        watch: pathSrc + '/img/*.svg',
        dest: pathDest + '/img'
    },

    fonts: {
        src: pathSrc + '/fonts/*.ttf',
        watch: pathSrc + '/fonts/*.ttf',
        dest: pathDest + '/fonts'
    },
}