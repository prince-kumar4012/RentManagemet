import ROLES from '../constants/roles.js';
import { maskOwnerDetails, maskTenantDetails } from '../utils/masking.util.js';

export const piiMaskingMiddleware = (req, res, next) => {
  const originalJson = res.json;

  res.json = function (data) {
    const user = req.user;
    const isUnmaskedAuthorized = user && (user.role === ROLES.SUPER_ADMIN || user.canViewUnmaskedPII === true);

    if (!isUnmaskedAuthorized && data && typeof data === 'object') {
      if (data.data) {
        data.data = applyMaskingToPayload(data.data);
      } else {
        data = applyMaskingToPayload(data);
      }
    }

    return originalJson.call(this, data);
  };

  next();
};

function applyMaskingToPayload(payload) {
  if (!payload) return payload;

  if (Array.isArray(payload)) {
    return payload.map(item => applyMaskingToPayload(item));
  }

  if (typeof payload === 'object') {
    const copy = { ...payload };

    if (copy.owner && typeof copy.owner === 'object') {
      copy.owner = maskOwnerDetails(copy.owner);
    }
    if (copy.tenant && typeof copy.tenant === 'object') {
      copy.tenant = maskTenantDetails(copy.tenant);
    }

    return copy;
  }

  return payload;
}

export default piiMaskingMiddleware;
