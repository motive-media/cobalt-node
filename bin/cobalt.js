"use strict";

// Grab args
var args = process.argv.slice(2);

// Default Options
var options = {};

var rl = require('readline').createInterface(
    process.stdin, process.stdout
);
var i = 0;
var data = {};

var prompts = [];

prompts.push({
    name: 'install_dir',
    title: 'Install Dir',
    example: './',
    default_value: './'
});

prompts.push({
    name: 'install_bower',
    title: 'Install Bower',
    example: 'y/n',
    default_value: 'y'
});

var askPrompt = function () {
    rl.setPrompt(prompts[i].title + ' [' + prompts[i].example + '] : ');
    rl.prompt();

    i++;
};

askPrompt();

rl.on('line', function (line) {
    data[prompts[i -1].name] = ('' === line) ? prompts[i - 1].default_value : line;

    if (i === prompts.length) {
        return rl.close();
    }

    askPrompt();
}).on('close', function () {
    console.log('Process Complete');
    console.log(data);
    process.exit(0);
});
