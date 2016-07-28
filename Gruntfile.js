module.exports = function(grunt) {

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
        tasks: ['less']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //Эти задания будут выполнятся сразу же когда вы в консоли напечатание grunt, и нажмете Enter
  grunt.registerTask('default', ['less:dev']);
  grunt.registerTask('build', ['less:build']);

};