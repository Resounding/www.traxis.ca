module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    typescript: {
        base: {
            src: ['client'],
            dest: 'app',
            options: {
                target: 'es5',
                basePath: 'client',
                watch: ['client/**/*.ts']
            }
        }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-typescript');

  // Default task(s).
  grunt.registerTask('default', ['typescript']);

};
