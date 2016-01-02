module.exports = function(grunt) {
    grunt.initConfig({
        ts: {
            default: {
                tsconfig: true
            }
        },
        clean: {
            src: ['dist']
        }
    });
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['clean', 'ts']);
};
