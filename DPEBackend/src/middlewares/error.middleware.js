import ApiResponse from '../utils/response.util.js';

export const errorHandler = (err, req, res, next) => {
  console.error(`[Error] ${req.method} ${req.originalUrl}:`, err.message);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  return ApiResponse.error(res, message, statusCode, process.env.NODE_ENV === 'development' ? err.stack : null);
};

export const notFoundHandler = (req, res, next) => {
  return ApiResponse.error(res, `Route ${req.originalUrl} not found`, 404);
};

export default {
  errorHandler,
  notFoundHandler
};
