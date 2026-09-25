import asyncHandler from '../utils/asyncHandler.js';
import ApiResponse from '../utils/response.util.js';
import {
  createSubAdminAccount,
  updateSubAdminPermissions,
  listSubAdmins
} from '../services/subAdmin.service.js';

export const createSubAdmin = asyncHandler(async (req, res) => {
  const { name, email, phone, modules, canViewUnmaskedPII } = req.body;
  if (!name || (!email && !phone)) {
    return ApiResponse.error(res, 'Name and Email or Phone are required to create Sub-Admin', 400);
  }

  const result = await createSubAdminAccount(req.user.id, req.body);
  return ApiResponse.success(res, 'Sub-Admin / Admin Partner account created successfully', result, 201);
});

export const updatePermissions = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { modules, canViewUnmaskedPII } = req.body;

  const result = await updateSubAdminPermissions(req.user.id, id, modules, canViewUnmaskedPII);
  return ApiResponse.success(res, 'Sub-Admin permissions updated successfully', result, 200);
});

export const getAllSubAdmins = asyncHandler(async (req, res) => {
  const subAdmins = await listSubAdmins();
  return ApiResponse.success(res, 'Sub-Admin accounts list fetched successfully', subAdmins, 200);
});

export default {
  createSubAdmin,
  updatePermissions,
  getAllSubAdmins
};
