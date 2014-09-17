var grunt = require('grunt');

grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.initConfig({
  concat: {
    js: {
      src: [
        'scripts/loader_pre.js', 
        'scripts/common/*', 
        'scripts/core/*', 
        'scripts/adapters/*', 
        'scripts/bootstrap.js', 
        'scripts/loader_post.js'
      ],
      dest: 'extension.js',
    },
    css: {
      src: [
        'bower_components/css-modal/build/modal.css', 
        'styles/style.css'
      ],
      dest: 'extension.css',
    }
  },

  less: {
    dev: {
      files: {
        "styles/style.css": "styles/style.less"
      }
    }
  },

  watch: {
    scripts: {
      files: ['scripts/**/*.js'],
      tasks: ['concat'],
      options: {
        spawn: false,
        livereload: true,
        liveReload: true
      },
    },
    less: {
      files: ['styles/**/*.less'],
      tasks: ['concat:css', 'less:dev'],
      options: {
        spawn: false,
        livereload: true,
        liveReload: true
      },
    }
  }
});

grunt.registerTask('default', ['less:dev', 'concat', 'watch']);
