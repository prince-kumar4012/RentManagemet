import asyncHandler from '../utils/asyncHandler.js';
import ApiResponse from '../utils/response.util.js';
import { getTenantRentalDetails, getTenantPaymentHistory } from '../services/tenantPortal.service.js';

export const getMyRental = asyncHandler(async (req, res) => {
  const rental = await getTenantRentalDetails(req.user.id);
  return ApiResponse.success(res, 'Tenant rental details fetched successfully', rental, 200);
});

export const getPaymentHistory = asyncHandler(async (req, res) => {
  const history = await getTenantPaymentHistory(req.user.id);
  return ApiResponse.success(res, 'Tenant payment history fetched successfully', history, 200);
});

export const raiseTenantRequest = asyncHandler(async (req, res) => {
  const { requestType, description } = req.body;
  if (!requestType || !description) {
    return ApiResponse.error(res, 'Request type and description are required', 400);
  }

  const ticket = {
    ticketId: `CV-TN-TK-${Math.floor(1000 + Math.random() * 9000)}`,
    tenant: req.user.id,
    requestType,
    description,
    status: 'OPEN',
    createdAt: new Date()
  };

  return ApiResponse.success(res, 'Tenant repair/support ticket logged successfully', ticket, 201);
});

export default {
  getMyRental,
  getPaymentHistory,
  raiseTenantRequest
};
