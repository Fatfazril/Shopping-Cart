/**
 * Send a success response.
 * @param {import('express').Response} res
 * @param {number} statusCode - HTTP status code
 * @param {string} message    - Human-readable message
 * @param {object} [data]     - Optional payload
 */
const success = (res, statusCode, message, data = {}) =>
  res.status(statusCode).json({ status: "success", message, ...data });

/**
 * Send an error response.
 * @param {import('express').Response} res
 * @param {number} statusCode - HTTP status code
 * @param {string} message    - Error description
 */
const error = (res, statusCode, message) =>
  res.status(statusCode).json({ status: "fail", message });

module.exports = { success, error };
