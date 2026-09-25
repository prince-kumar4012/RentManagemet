import ApiResponse from '../utils/response.util.js';
import ROLES from '../constants/roles.js';

export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return ApiResponse.error(res, 'Unauthenticated user', 401);
    }

    if (req.user.role === ROLES.SUPER_ADMIN) {
      return next(); // Super Admin has unrestricted access to all routes
    }

    if (!allowedRoles.includes(req.user.role)) {
      return ApiResponse.error(res, `Access denied: Role '${req.user.role}' is not authorized for this resource`, 403);
    }

    next();
  };
};

export default authorizeRoles;
