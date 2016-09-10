module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    svgmin: {
      options: {
        plugins: [
            {
              removeViewBox: false
            }, {
              removeUselessStrokeAndFill: false
            }, {
              removeAttrs: {
                  attrs: ['xmlns:xlink']
              }
            }
        ]
      },
      dist: {
        files: [{               // Dictionary of files
          expand: true,       // Enable dynamic expansion.
          cwd: '_src/',     // Src matches are relative to this path.
          src: ['*.svg'],  // Actual pattern(s) to match.
          dest: '_src/svg-sprite/',       // Destination path prefix.
          ext: '.min.svg'     // Dest filepaths will have this extension.
          // ie: optimise img/src/branding/logo.svg and store it in img/branding/logo.min.svg
        }]
      }
    },

    svgstore: {
      options: {
        svg: { // will add and overide the the default xmlns="http://www.w3.org/2000/svg" attribute to the resulting SVG 
          style: 'display: none;',
          xmlns: 'http://www.w3.org/2000/svg'
        }
      },
      default : {
        files: {
          'img/icon-sprite.svg': ['_src/svg-sprite/*.svg'],
        }
      }
    },

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

    postcss: {
      options: {
        processors: [
          require('autoprefixer')({
              browsers: ['last 2 versions']
          })
        ]
      },
      dist: {
        src: 'css/*.css'
      }
    },

    watch: {
      css: {
        files: ['less/**/*.less'],
        tasks: ['less:dev', 'postcss']
      },
      svg: {
        files: ['_src/*.svg'],
        tasks: ['svgmin', 'svgstore']
      }
    },

    browserSync: {
      bsFiles: {
        src : [
          '*.html',
          'css/*.css',
          'js/*.js'
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