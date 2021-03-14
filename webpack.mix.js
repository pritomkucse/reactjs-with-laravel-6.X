const mix = require('laravel-mix');
const date = (new Date()).getTime();

const fs = require('fs');
const buildDir = './public/js/chunk/';
fs.readdir(path.resolve(buildDir), (err, files) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('\n');
        var total = files.length, deleted = 0;
        files.forEach(function (file) {
            fs.unlink(path.resolve(buildDir + file), function () {
                console.log(buildDir + file + ' - deleted');
                deleted++;

                if (total === deleted) {
                    console.log('\n');
                }
            });
        });
    }
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');



mix.webpackConfig({
    output: {
        // Directory for junk files to {ROOT_DIR}/public/js
        chunkFilename: 'js/chunk/[name]-' + date + '.js'
    },
});