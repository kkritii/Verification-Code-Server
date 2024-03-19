import verifyCodeService from '../services/verifyCode.js';

/**
 * Controller to verify code.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export default function verifyCode(req, res, next) {
  verifyCodeService(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
