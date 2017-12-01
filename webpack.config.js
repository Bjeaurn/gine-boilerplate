'use strict';

var yargs = require('yargs').argv;
var env = yargs.env || 'dev';
module.exports = require(`./config/webpack.${env}.js`);