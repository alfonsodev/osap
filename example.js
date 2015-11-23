#!/usr/bin/env node
'use strict';

const soap = require(`${__dirname}/index`);

soap(`display dialog "A dialog" buttons "OK" default button 1`);
