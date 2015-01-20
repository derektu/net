/**
 * Created by derektu on 1/18/15.
 */
var express = require('express');
var bodyParser = require('body-parser');
var responseTime = require('response-time');
var log = require('./logger');
var logger = log.getLogger('[webserver]');
var WebServer = (function () {
    function WebServer() {
        this.app = express();
        var webFolder = __dirname + '/../web';
        this.app.use(express.static(webFolder));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
        this.app.use(responseTime());
        this.apiRouter = express.Router();
        this.configureApiRouter(this.apiRouter);
        this.app.use('/api', this.apiRouter);
        this.app.use(function (err, req, res, next) {
            logger.debug('Error request[' + req.url + '] Err=[' + err.toString() + ']');
            logger.debug(err.stack || '');
            res.status(500).send('Internal error occurred.');
        });
    }
    /**
     * Start webserver
     */
    WebServer.prototype.start = function (port) {
        this.app.listen(port);
        logger.debug('webserver listen on port:' + port);
    };
    /**
     * Configure API route
     * @constructor
     */
    WebServer.prototype.configureApiRouter = function (router) {
        // delay?dur=2000
        //
        router.get('/delay', function (req, res) {
            var delay = parseInt(req.query.dur) || 0;
            if (delay <= 0)
                delay = 1000;
            setTimeout(function () {
                res.json({});
            }, delay);
        });
        router.get('/', function (req, res) {
            // req.connection.remoteAddress
            // req.connection.remotePort
            //
            res.json({});
        });
    };
    return WebServer;
})();
module.exports = WebServer;
//# sourceMappingURL=webserver.js.map