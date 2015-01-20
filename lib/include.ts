/**
 * Created by derektu on 1/18/15.
 */

/*
    common Typescript ambient files to include
 */

///<reference path="../typings/node/node.d.ts"/>
///<reference path="../typings/mocha/mocha.d.ts"/>
///<reference path="../typings/lodash/lodash.d.ts"/>
///<reference path="../typings/bluebird/bluebird.d.ts"/>
///<reference path="../typings/request/request.d.ts"/>
///<reference path="../typings/log4js/log4js.d.ts"/>
///<reference path="../typings/moment/moment.d.ts"/>
///<reference path="../typings/express/express.d.ts"/>

declare module "response-time" {
    function responseTime(options?:any);
    export = responseTime;
}

