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
var log4js = require('log4js');
log4js.configure({
    appenders: [
        { type: 'console' }
    ]
});
module.exports = log4js;
//# sourceMappingURL=logger.js.map