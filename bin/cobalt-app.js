#!/usr/bin/env node

// Dependencies
var optimist = require('optimist');
var cobalt = require('../lib/cobalt.js');

// Get options passed
var options = optimist
    .options('d', {
        alias: 'dir',
        default: './',
        describe: 'Path to install',
    })
    .options('r', {
        alias: 'repo',
        default: 'git@github.com:motive-media/angular-app.git',
        describe: 'Github repo path'
    })
    .argv;

// Initiate
cobalt.init(options);
