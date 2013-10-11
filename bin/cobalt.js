#! /usr/bin/env node

var cobalt = require('../lib/cobalt');

var options = {
    dir: 'download',
    repo: 'angular-app',
    user: 'motive-media'
};

var appArgs = process.argv;

appArgs.forEach(function (v, i) {
    v = v.toString();

    var keyVal = v.split('=');

    if (typeof keyVal[0] !== 'undefined' && typeof keyVal[1] !== 'undefined') {
        options[keyVal[0]] = keyVal[1];
    }
});

cobalt.download(options);
