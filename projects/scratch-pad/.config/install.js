#!/usr/bin/env node

'use strict';

var
    fs = require('fs'),
    exec = require('child_process').exec;

function cloneNotes(complete) {
    var cmd = 'git clone https://github.com/OperationSpark/notes-bootcamp.git notes';
    var child = exec(cmd, function (err, stdout, stderr) {
        if (err) { return complete(err); }
        console.log('Successfully cloned notes!');
        complete();
    });
}

function removeGitRemnants(complete) {
    var dir = 'notes/';
    var gitignore = dir + '.gitignore';
    if (fs.existsSync(gitignore)) { fs.unlinkSync(gitignore); }
    removeDirectoryRecursively(dir + '.git', complete);
}

function removeDirectoryRecursively(path, complete) {
    var cmd = 'rm -r ' + path;
    var child = exec(cmd, function (err, stdout, stderr) {
        if (err) { return complete(err); }
        console.log('Successfully removed ' + path + '!');
        complete();
    });
}

if (fs.existsSync('notes')) {
    try{
        console.log('Removing old notes...');
        removeDirectoryRecursively('notes', function(err) {
            if(err) { console.log(err); }
            install();
        });
    } catch (err) {
        console.log(err);
    }
} else {
    install();
}

function install() {
    cloneNotes(function (err) {
        if (err) { return console.log(err); }
        removeGitRemnants(function (err) {
            if (err) { return console.log(err); }
            console.log('All done, bye!');
        });
    });
}