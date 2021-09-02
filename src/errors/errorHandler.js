/**
 * Express API error handler.
 */
 function errorHandler(error, request, response, next) {
    const { status = 500, message = "A server error has occured!" } = error;
    response.status(status).json({ error: message });
  }
  
  module.exports = errorHandler;
  