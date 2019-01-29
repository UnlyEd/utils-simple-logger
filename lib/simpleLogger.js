'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var winston = require('winston');

var format = winston.format,
    transports = winston.transports;
var combine = format.combine,
    timestamp = format.timestamp,
    printf = format.printf,
    splat = format.splat,
    colorize = format.colorize;
var myFormat = printf(function (info) {
  var meta = '';

  if (info.meta) {
    meta = ['string', 'number'].includes(_typeof(info.meta)) ? "[".concat(info.meta, "]") : JSON.stringify(info.meta, null, 2);
  }

  return "".concat(info.timestamp, " [").concat(info.label, "] ").concat(info.level, ": ").concat(meta, " ").concat(info.message); // Display complex type as json
});
/**
 * Create a logger based on many default options, only allow customisation of a few of them
 * see https://github.com/winstonjs/winston
 * @param label
 * @param level
 * @returns {winston.Logger}
 */

var createLogger = function createLogger(_ref) {
  var label = _ref.label,
      defaultLevel = _ref.defaultLevel;
  var isProd = process.env.NODE_ENV === 'production' ? 'error' : 'debug';
  var level = defaultLevel || isProd;
  return winston.createLogger({
    level: level,
    format: combine(colorize(), format.label({
      label: label
    }), timestamp(), splat(), myFormat),
    transports: [new transports.Console()]
  });
};
/**
 * Info log request origin with a default Logger and default options
 * see https://github.com/winstonjs/winston
 * @param req
 * @param label
 */

var logRequest = function logRequest(req, label) {
  var logger = createLogger({
    label: label
  });
  logger.info("".concat(req.protocol, "://").concat(req.get('host')).concat(req.originalUrl));
};

exports.myFormat = myFormat;
exports.createLogger = createLogger;
exports.logRequest = logRequest;
