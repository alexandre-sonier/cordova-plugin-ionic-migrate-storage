'use strict';
var exec = require('cordova/exec');

var MigrateIOSStorage = {
    execute: function (successCallback, errorCallback) {
        return exec(successCallback, errorCallback, 'MigrateStorage', 'execute', []);
    }
};

module.exports = MigrateIOSStorage;
