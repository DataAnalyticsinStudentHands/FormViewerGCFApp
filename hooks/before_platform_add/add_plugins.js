#!/usr/bin/env node
 
//this hook installs all your plugins
 
// add your plugins to this list--either 
// the identifier, the filesystem location 
// or the URL
var pluginlist = [
    "phonegap-plugin-barcodescanner",
    "cordova-plugin-splashscreen",
    "cordova-plugin-statusbar",
	"cordova-plugin-whitelist"
];

// no need to configure below
var sys = require('sys');
var exec = require('child_process').exec;
 
function puts(error, stdout, stderr) {
    console.log(stdout)
}
 
pluginlist.forEach(function(plug) {
    exec("cordova plugin add " + plug, puts);
});