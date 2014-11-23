module.exports = function (grunt) {
    'use strict';

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        open: {
            site: {
                path: 'http://localhost:3000'
            }
        },
        watch: {
            options: {
                livereload: true
            },
            all: {
                files: ['app/**/*.js', 'app/**/*.html', 'public/**/*.*']
            }
        },
        exec: {
            server: {
                cmd: 'node server.js'
            }
        },
        touch: {
        	src: ['public/index.html']
    	},
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            'server-and-client': {
                tasks: ['exec:server', 'open:site', 'watch']
            }
        }
    });

    grunt.registerTask('server', ['exec:server']);

    grunt.registerTask('client', ['open:site', 'watch']);

    grunt.registerTask('reload', ['touch']);

    // define the default task that can be run just by typing "grunt" on the command line
    // the array should contains the names of the tasks to run
    grunt.registerTask('default', ['concurrent:server-and-client']);
};
