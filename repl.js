#!/usr/bin/env node --harmony

var repl = require('repl');
var util = require('util');
var vm = require('vm');
var fs = require('fs');

var genEval = function(cmd, context, filename, callback) {
   try {
     var result = vm.runInNewContext(cmd.slice(1, -2), context, '', 0, false);
     callback(null, result);
   } catch(e) {
     context.callback = callback;
     var cmd = "co(function*(){callback(null," + cmd + ");})";
     //console.log(cmd);
     var result = vm.runInNewContext(cmd, context, 'repl.js');
   }
};
var context = repl.start({
  prompt: '> ',
  eval: genEval
}).context;
context.co = require('co');
