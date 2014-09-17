module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      dev: {
        files: {
          "dist/styles.css": "app/less/styles.less"
        }
      },
      prod: {
        options: {
          cleancss: true
        },
        files: {
          "dist/styles.css": "app/less/styles.less"
        }
      },

    },
    watch: {
      less: {
        files: ['app/less/**/*.less'],
        tasks: ['less:dev'],
        options: {
          livereload: true
        }
      },
      hbs: {
        files: ['templates/**/*.hbs'],
        tasks: ['handlebars'],
        options: {
          livereload: true
        }
      }
    },
    bower: {
      target: {
        rjsConfig: 'app/config.js'
      }
    },
    handlebars: {
      compile: {
        options: {
          namespace: 'templates',
          processName: function(filePath) {
            var names = filePath.replace(/templates\/(.*)(\.hbs)/, '$1').replace(/\//, '.');
            return names.split('/').join('.');
          },
          processPartialName: function(filePath) {
            var pieces = filePath.split("/");
            console.log(pieces[pieces.length - 1], pieces[pieces.length - 1].replace(/\.hbs/, ''))
            return pieces[pieces.length - 1].replace(/\.hbs/, '');
          },
        },
        files: {
           "app/templates.js": "templates/**/*.hbs",
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('rjs', ['bower:target']);
};

