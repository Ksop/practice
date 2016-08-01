module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      dev: {
        options: {
          paths: ['less/']
        },
        files: {
          'css/style.css': 'less/style.less'
        }
      },
      build: {
        options: {
          compress: true
        },
        files: {
          'css/style.min.css': 'less/style.less'
        }
      }
    },

    watch: {
      css: {
        files: ['less/**/*.less'],
        tasks: ['less:dev']
      }
    },

    browserSync: {
      bsFiles: {
        src : [
          '*.html',
          'css/*.css'
        ]
      },
      options: {
        watchTask: true,
        server: '.'
      }
    }
  });


  //Эти задания будут выполнятся сразу же когда вы в консоли напечатание grunt, и нажмете Enter
  grunt.registerTask('default', ['browserSync','watch']);
  grunt.registerTask('build', ['less:build']);

};