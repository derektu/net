/**
 * Created by derektu on 1/18/15.
 */

/*
    Global logger object

    import logger = require('./lib/logger.js').getLogger('[moduleName]');

    logger.debug('...');
    logger.info('...');

 */

///<reference path="./include.ts"/>

import log4js = require('log4js');

log4js.configure({
    appenders: [
        { type: 'console' }
    ]
});

export = log4js;
