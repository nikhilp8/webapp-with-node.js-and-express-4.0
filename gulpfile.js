var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', function( {
    return gulp.src(jsFiles)
        .pipe(jshint());
        .pipe(jshint.reporter('js-hint-stylish',{
    verbosetrue }))
        .pipe(jscs());
}));
    
gulp.task('serve', function() {
    var options = {
        script: 'app.js'
        env: {
            'PORT': 5000
    },
        watch: jsFiles
        
}
    return nodemon(options)
        .on('restart', function (ev) {
        console.log('Restarting...');
})
    
})