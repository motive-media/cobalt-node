(function () {
    var gh = require('github-download');

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
        }, options.dir);
    }
}).call(this);
