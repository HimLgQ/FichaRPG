import gulp from 'gulp';
import browserSync from 'browser-sync';
import nodemon from 'gulp-nodemon';
import dotenv from 'dotenv';
dotenv.config();

const port = Number(process.env.PORT) || 3000;
const browserOpts = {
    proxy: 'http://localhost:' + port,
    port: port + 1,
    open: false
};

gulp.task('development', () => {
    let restarted = false;
    browserSync.create();
    browserSync.init(browserOpts);

    return nodemon({
        exec: 'babel-node --presets=@babel/preset-env ./bin/www',
        inspect: '9228',
        ignore: './node_modules',
        ext: 'js,ejs,json,css'
    })
    .on('start', () => {
        if (restarted) {
            setTimeout(() => {
                browserSync.reload();
            }, 1000);
        }
    })
    .on('restart', () => {
        restarted = true;
    });
});