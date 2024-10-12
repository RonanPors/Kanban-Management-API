import ApiError from '../errors/api.error.js';

export default (err, req, res, next) => {

  let { status } = err;

  // log the error for environment like development.
  if ( process.env.NODE_ENV !== 'production') {
    console.error(err);
  };

  // if the error is an instance of ApiError, we send the status and the message.
  if (err instanceof ApiError)
    return res.status(status).json({
      name: err.name,
      message: err.message,
      status: err.status,
    });

  // if the error is not an instance of ApiError and the status is 500, we send a generic message.
  if (status === 500)
    return res.status(500).json({ error: {
      err,
      message: 'Internal server error',
    }});

  // if the error is not defined, we send a generic message.
  return res.status(status|| err.status || 500).json({
    name: err.name,
    message: err.message,
    info: 'Unknown error, please contact the administrator',
  });
};
