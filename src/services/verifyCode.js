/**
 * Verify a code.
 *
 * @param {Object} params
 * @return {Object}
 */
export default async function verifyCode(params) {
  const { verificationCode } = params;

  const lastDigit        = parseInt(verificationCode.slice(-1), 10)
  const isValidLength    = verificationCode.length === 6;
  const isValidLastDigit = lastDigit !== 7;
  const isSuccess        = isValidLength && isValidLastDigit;

  if (!isSuccess) {
    throw new Error('Invalid Verification Code')
  }

  return { message : 'Valid Verification Code' };
}
