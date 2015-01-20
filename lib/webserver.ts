/**
 * Created by derektu on 1/18/15.
 */

///<reference path="../lib/include.ts"/>
///<reference path="../typings/body-parser/body-parser.d.ts"/>

import Promise = require('bluebird');
import _ = require('lodash');
import express = require('express');
import bodyParser = require('body-parser');
import responseTime = require('response-time');
import moment = require('moment');

import log = require('./logger');
var logger = log.getLogger('[webserver]');

class WebServer {
    private app : express.Express;
    private apiRouter : express.Router;

    constructor() {
        this.app = express();
        var webFolder = __dirname + '/../web';

        this.app.use(express.static(webFolder));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));    // parse application/x-www-form-urlencoded
        this.app.use(responseTime());

        this.apiRouter = express.Router();
        this.configureApiRouter(this.apiRouter);

        this.app.use('/api', this.apiRouter);

        this.app.use((err, req: express.Request, res: express.Response, next) => {
            logger.debug('Error request[' + req.url + '] Err=[' + err.toString() + ']');
            logger.debug(err.stack || '');
            res.status(500).send('Internal error occurred.');
        });
    }

    /**
     * Start webserver
     */
    start(port:number) {
        this.app.listen(port);
        logger.debug('webserver listen on port:' + port);
    }

    /**
     * Configure API route
     * @constructor
     */
    private configureApiRouter(router: express.Router) {
        // delay?dur=2000
        //
        router.get('/delay', (req: express.Request, res: express.Response) => {
            var delay = parseInt(req.query.dur) || 0;
            if (delay <= 0)
                delay = 1000;

            setTimeout(() => {
                res.json({});
            }, delay);
        });

        router.get('/', (req: express.Request, res: express.Response) => {
            // req.connection.remoteAddress
            // req.connection.remotePort
            //
            res.json({});
        });
    }
}

export = WebServer;


