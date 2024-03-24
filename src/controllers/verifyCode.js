import * as verifyCodeService from '../services/verifyCode.js';

/**
 * Controller to check if server is running.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function checkServerStatus(req, res, next) {
  verifyCodeService
    .checkServerStatus()
      .then((data) => res.json(data))
      .catch((err) => next(err));
}

/**
 * Controller to verify code.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function verifyCode(req, res, next) {
  verifyCodeService
    .verifyCode(req.body)
      .then((data) => res.json(data))
      .catch((err) => next(err));
}
