(function (module) {
    "use strict";
    var exec = require('child_process').exec;
    var fs = require('fs');

    var cobalt = {
        options: {},

        init: function (options) {
            var self = this;

            this.options = options;
            this.options.testDir = this.options.dir + '/test-cobalt-app-build';

            fs.exists(this.options.testDir, function (exists) {
                if (exists) {
                    exec('rm -rf ' + self.options.testDir, function (error) {
                        self.getRepo();
                    });
                } else {
                    self.getRepo();
                }
            });
        },

        getRepo: function () {
            exec('git clone ' + self.options.repo + ' ' + self.options.testDir, function (error) {
                if (error) {
                    console.log('There was an issue ');
                }
            });
        }
    };

    // Export Cobalt
    var exports = module.exports = Object.create(cobalt);
})(module);
