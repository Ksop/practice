module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    svgstore: {
      options: {
        svg: { // will add and overide the the default xmlns="http://www.w3.org/2000/svg" attribute to the resulting SVG 
          style: 'display: none;',
          xmlns: 'http://www.w3.org/2000/svg'
        }
      },
      default : {
        files: {
          'build/img/icon-sprite.svg': ['img/icons/svg-sprite/*.svg'],
        }
      }
    },


    svgmin: {
      options: {
        plugins: [
          { removeViewBox: false }, 
          { removeUselessStrokeAndFill: false }, 
          { removeAttrs: 
            { attrs: ['xmlns:xlink'] }
          }
        ]
      },
      dist: {
        files: [{               // Dictionary of files
          expand: true,       // Enable dynamic expansion.
          cwd: 'build/img',     // Src matches are relative to this path.
          src: ['*.svg'],  // Actual pattern(s) to match.
          dest: 'build/img/'      // Destination path prefix.
          //ext: '.min.svg'     // Dest filepaths will have this extension.
          // ie: optimise img/src/branding/logo.svg and store it in img/branding/logo.min.svg
        }]
      }
    },


    imagemin: {
      images: {     
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,                  // Enable dynamic expansion 
          cwd: 'build/img',                   // Src matches are relative to this path 
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match 
          dest: 'build/img/'                  // Destination path prefix 
        }]
      }
    },


    less: {
      style: {
        files: {
          'build/css/style.css': 'less/style.less'
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
        src: 'build/css/*.css'
      }
    },

    css_mqpacker: {
      main: {
        options: {
          sort: true
        },
        expand: true,
        cwd: 'build/css/',
        src: 'style.css',
        dest: 'build/css/'
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'build/css',
          src: ['*.css', '!*.min.css'],
          dest: 'build/css',
          ext: '.min.css'
        }]
      }
    },

    copy: {
      build: {
        files: [{
          expand: true,
          src: [
            'fonts/**',
            'img/**',
            'js/**',
            '*.html'
          ],
          dest: 'build/'
        }]
      },
      html: {
        files: [{
          expand: true,
          src: ['*.html'],
          dest: 'build/'
        }]
      },
      js: {
        files: [{
          expand: true,
          src: ['js/*.js'],
          dest: 'build/'
        }]
      }
    },

    clean: {
      build: ['build']
    },

    watch: {
      html: {
        files: ['*.html'],
        tasks: ['copy:html']
      },
      js: {
        files: ['js/**/*.js'],
        tasks: ['copy:js']
      },
      css: {
        files: ['less/**/*.less'],
        tasks: ['less', 'postcss', 'css_mqpacker', 'cssmin']
      },
      svg: {
        files: ['img/icons/svg-sprite/*.svg'],
        tasks: ['svgsprite']
      }
    },

    browserSync: {
      bsFiles: {
        src : [
          'build/*.html',
          'build/css/*.css',
          'build/js/'
        ]
      },
      options: {
        watchTask: true,
        server: 'build/'
      }
    }
  });


  //Эти задания будут выполнятся сразу же когда вы в консоли напечатание grunt, и нажмете Enter
  grunt.registerTask('server', ['browserSync','watch']);
  grunt.registerTask('svgsprite', ['svgmin','svgstore']);
  grunt.registerTask('build', [
    'clean',
    'copy',
    'less', 
    'postcss', 
    'css_mqpacker', 
    'cssmin', 
    'svgsprite',
    'imagemin'
  ]);

};