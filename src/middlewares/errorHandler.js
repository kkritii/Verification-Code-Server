/**
 * Generic error handling middleware.
 *
 * @param {Object} err
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export default function (err, req, res, next) {
  const error = {
    code: 500,
    message: err.message
  };

  res.status(error.code).json(error);
}