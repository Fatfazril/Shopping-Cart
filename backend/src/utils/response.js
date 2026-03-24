/**
 * Send a success response.
 * @param {import('express').Response} res
 * @param {number} status  - HTTP status code
 * @param {string} message - Human-readable message
 * @param {object} [data]  - Optional payload
 */
const success = (res, status, message, data = {}) =>
  res.status(status).json({ message, ...data });

/**
 * Send an error response.
 * @param {import('express').Response} res
 * @param {number} status  - HTTP status code
 * @param {string} message - Error description
 */
const error = (res, status, message) =>
  res.status(status).json({ message });

module.exports = { success, error };
