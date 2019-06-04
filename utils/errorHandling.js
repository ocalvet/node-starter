import chalk from 'chalk';
import UnknownError from '../errors/UnknownError';
import ModelNotFoundError from '../errors/ModelNotFoundError';

export function errorLogger(err, req, res, next) {
  if (err.message) {
    console.log(chalk.default.red(err.message));
  }
  if (err.stack) {
    console.log(chalk.default.red(err.stack));
  }
  next(err);
};

export function unknownErrorLogger(err, req, res, next) {
  if (err instanceof UnknownError) {
    return res.sendStatus(400);
  }
  next();
};

export function modelNotFoundErrorLogger(err, req, res, next) {
  if (err instanceof ModelNotFoundError) {
    res.status(400);
    return res.send({ error: 'Model not found' });
  }
  next();
};

export function genericErrorLogger(err, req, res, next) {
  res.sendStatus(500);
  next();
};

export default app => {
  app.use([
    errorLogger,
    unknownErrorLogger,
    modelNotFoundErrorLogger,
    genericErrorLogger
  ]);
};


