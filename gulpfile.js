var gulp = require('gulp')
var concat = require('gulp-concat');

sourceFiles = ['I.mmd', 'II.mmd', 'III.mmd', 'IV.mmd', 'references.md']
outputFile = 'paper.mmd'


function concatFiles() {
  return gulp.src(sourceFiles)
    .pipe(concat({ path: outputFile, stat: { mode: 0666 }}))
    .pipe(gulp.dest('./built'))
}

gulp.task('concat', concatFiles);
gulp.task('default', concatFiles);

gulp.task('watch', function() {
  gulp.watch(sourceFiles, ['concat'])
});

