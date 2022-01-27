
// eslint-disable-next-line no-shadow
export enum LOG_LEVELS {
  DEBUG,
  LOG,
  INFO,
  WARN,
  ERROR,
};

const getLogLevel = () => {
  let logLevel = LOG_LEVELS.DEBUG;

  try {
    logLevel = parseInt(process?.env?.REACT_APP_LOG_LEVEL || '', 10);
  } catch (e) {
    console.error(e);
  };

  return logLevel;
};


export const LOG_LEVEL = getLogLevel();
