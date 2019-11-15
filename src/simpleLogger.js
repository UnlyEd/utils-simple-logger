const winston = require('winston');

const { format, transports } = winston;
const {
  combine, timestamp, printf, splat, colorize,
} = format;

export const myFormat = printf((info) => {
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
 * see https://github.com/winstonjs/winston
 * @param label
 * @param level
 * @returns {winston.Logger}
 */
export const createLogger = ({ label, defaultLevel }) => {
  const isProd = (process.env.UNLY_SIMPLE_LOGGER_ENV || process.env.NODE_ENV) === 'production' ? 'error' : 'debug';
  const level = defaultLevel || isProd;
  return winston.createLogger({
    level,
    format: combine(colorize(), format.label({ label }), timestamp(), splat(), myFormat),
    transports: [
      new transports.Console(),
    ],
  });
};

/**
 * Info log request origin with a default Logger and default options
 * see https://github.com/winstonjs/winston
 * @param req
 * @param label
 */
export const logRequest = (req, label) => {
  const logger = createLogger({
    label,
  });

  logger.info(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
};
