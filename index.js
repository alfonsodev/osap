'use strict';

if (process.platform !== 'darwin') {
  console.error('Platform is not supported!');
  process.exit(-2);
}

const exec = require('child_process').exec;

module.exports = function(script) {
  if (!script || script === '') throw new Error('Invalid arguments');
  script = script.replace(/\n/g, ' ').replace(/\"/g, '\\"');
  return new Promise(function(resolve, reject) {
    let command = `osascript -e "${script}"`;
    exec(command, function(error, stdout, stderr) {
      if (error !== null || stderr !== '') {
        return reject(error, stdout, stderr);
      }
      return resolve(error, stdout, stderr);
    });
  });
};
