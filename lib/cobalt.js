(function () {
    var gh = require('github-download'),
        exec = require('exec');

    this.download = function (options) {
        console.log('---------------------------');
        console.log('--Creating new Cobalt App--');
        console.log('---------------------------');
        console.log(' ');
        console.log('Dir: ' + options.dir);
        console.log(' ');

        gh({
            user: options.user,
            repo: options.repo
        }, options.dir).on('dir', function(dir) {
            console.log(dir);
        })
        .on('file', function(file) {
            console.log(file);
        })
        .on('zip', function(zipUrl) { //only emitted if Github API limit is reached and the zip file is downloaded
            console.log(zipUrl);
        })
        .on('error', function(err) {
            console.error(err);
        })
        .on('end', function() {
            console.log('DONE!');
        });
    }
}).call(this);
