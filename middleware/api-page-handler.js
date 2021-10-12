import _ from 'lodash';
import { serialize } from 'cookie';
import Cors from 'cors';

const cors = middlewarePromise(
  // options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    origin: '*',
    methods: 'GET,POST',
    preflightContinue: false,
    optionsSuccessStatus: 204
  })
);

const cookie = (res, name, value, options = {}) => {
  const stringValue = typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value);

  if ('maxAge' in options) {
    options.expires = new Date(Date.now() + options.maxAge);
    options.maxAge /= 1000;
  }

  res.setHeader('Set-Cookie', serialize(name, String(stringValue), options));
};

const apiPageHandler = (handler) => async (req, res) => {
  // set cors before moving on
  await cors(req, res);

  // assign to res object
  req.cookie = (name, value, options) => cookie(res, name, value, options);

  return handler(req, res);
};

function middlewarePromise(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

export default apiPageHandler;
