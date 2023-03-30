const log4js = require("log4js");

log4js.configure({
  appenders: {
    out: { type: "file", filename: "logs/common.log" },
    error: {
      type: "dateFile",
      filename: "logs/error-",
      pattern: "yyyy-MM-dd.log",
      alwaysIncludePattern: true, // filename + pattern
    },
  },
  categories: {
    default: { appenders: ["out"], level: "debug" },
    info: { appenders: ["out"], level: "info" },
    error: { appenders: ["error"], level: "error" },
  },
});

const logFn = (content, type) => {
  const logger = log4js.getLogger(type);
  logger.level = type;
  logger[type](content);
};

module.exports = {
  debug: (content) => logFn(content, "debug"),
  info: (content) => logFn(content, "info"),
  error: (content) => logFn(content, "error"),
};


