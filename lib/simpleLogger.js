const winston = require('winston');

const { format, transports } = winston;
const {
  combine, timestamp, printf, splat, colorize,
} = format;

// See https://github.com/winstonjs/winston

const myFormat = printf((info) => {
  let meta = '';
  if (info.meta) {
    meta = [
      'string',
      'number',
    ].includes(typeof info.meta) ? `[${info.meta}]` : JSON.stringify(info.meta, null, 2);
  }
  return `${info.timestamp} [${info.label}] ${info.level}: ${meta} ${info.message}`; // Display complex type as json
});

/**
 * Create a logger based on many default options, only allow customisation of a few of them
 *
 * @param label
 * @param level
 * @returns {winston.Logger}
 */
const createLogger = ({ label, defaultLevel }) => {
  const isProd = process.env.NODE_ENV === 'production' ? 'error' : 'debug';
  const level = defaultLevel || isProd;
  return winston.createLogger({
    level,
    format: combine(
      colorize(),
      format.label({ label }),
      timestamp(),
      splat(),
      myFormat,
    ),
    transports: [
      new transports.Console(),
    ],
  });
};

/**
 *
 * @param req
 * @param label
 */
const logRequest = (req, label) => {
  const logger = createLogger({
    label,
  });

  logger.info(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
};

module.exports = {
  logRequest,
  createLogger,
};
