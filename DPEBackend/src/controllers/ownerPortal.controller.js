import asyncHandler from '../utils/asyncHandler.js';
import ApiResponse from '../utils/response.util.js';
import {
  getOwnerProperties,
  getOwnerPayoutHistory,
  getOwnerActivityLog,
  getOwnerInspectionReports
} from '../services/ownerPortal.service.js';

export const getMyProperties = asyncHandler(async (req, res) => {
  const properties = await getOwnerProperties(req.user.id);
  return ApiResponse.success(res, 'Owner properties fetched successfully', properties, 200);
});

export const getPayouts = asyncHandler(async (req, res) => {
  const payouts = await getOwnerPayoutHistory(req.user.id);
  return ApiResponse.success(res, 'Rent payout history fetched successfully', payouts, 200);
});

export const getActivityLog = asyncHandler(async (req, res) => {
  const log = await getOwnerActivityLog(req.user.id);
  return ApiResponse.success(res, 'Owner activity log fetched successfully', log, 200);
});

export const getInspections = asyncHandler(async (req, res) => {
  const reports = await getOwnerInspectionReports(req.user.id);
  return ApiResponse.success(res, 'Inspection reports fetched successfully', reports, 200);
});

export const raiseSupportRequest = asyncHandler(async (req, res) => {
  const { propertyId, issueCategory, description } = req.body;
  if (!issueCategory || !description) {
    return ApiResponse.error(res, 'Issue category and description are required', 400);
  }

  const supportTicket = {
    ticketId: `CV-TK-${Math.floor(1000 + Math.random() * 9000)}`,
    owner: req.user.id,
    propertyId: propertyId || null,
    issueCategory,
    description,
    status: 'OPEN',
    createdAt: new Date()
  };

  return ApiResponse.success(res, 'Support request submitted successfully. Support Executive will call you shortly.', supportTicket, 201);
});

export default {
  getMyProperties,
  getPayouts,
  getActivityLog,
  getInspections,
  raiseSupportRequest
};
