import asyncHandler from '../utils/asyncHandler.js';
import ApiResponse from '../utils/response.util.js';
import { validateRequestOtpInput, validateVerifyOtpInput } from '../validators/auth.validator.js';
import { sendOtpService, verifyOtpService } from '../services/otp.service.js';
import { createStaffAccountBySuperAdmin, getUserById } from '../services/auth.service.js';

export const requestOtp = asyncHandler(async (req, res) => {
  const { isValid, errors } = validateRequestOtpInput(req.body);
  if (!isValid) {
    return ApiResponse.error(res, 'Validation Failed', 400, errors);
  }

  const { identifier, roleType, name, otp } = req.body;
  const result = await sendOtpService(identifier, roleType, name);

  // Smart Verification Routing: If "otp" is supplied in body, verify OTP and issue JWT tokens immediately!
  if (otp) {
    const verifyResult = await verifyOtpService(identifier, otp);
    return ApiResponse.success(res, 'OTP verification successful. Welcome to Delhi Property Exchange!', verifyResult, 200);
  }

  // Destructure message and success to avoid duplication in data object
  const { message, success, ...cleanData } = result;
  return ApiResponse.success(res, message, cleanData, 200);
});

export const verifyOtp = asyncHandler(async (req, res) => {
  const { isValid, errors } = validateVerifyOtpInput(req.body);
  if (!isValid) {
    return ApiResponse.error(res, 'Validation Failed', 400, errors);
  }

  const { identifier, otp } = req.body;
  const result = await verifyOtpService(identifier, otp);

  return ApiResponse.success(res, 'OTP verification successful. Welcome to Delhi Property Exchange!', result, 200);
});

export const createStaff = asyncHandler(async (req, res) => {
  const { name, email, phone, role } = req.body;
  if (!name || (!email && !phone)) {
    return ApiResponse.error(res, 'Staff Name and Email or Phone are required', 400);
  }

  const staffUser = await createStaffAccountBySuperAdmin(req.user.id, req.body);
  return ApiResponse.success(res, `Staff account (${staffUser.role}) created successfully by Super Admin`, staffUser, 201);
});

export const getProfile = asyncHandler(async (req, res) => {
  const user = await getUserById(req.user.id);
  return ApiResponse.success(res, 'User profile fetched successfully', user, 200);
});

export default {
  requestOtp,
  verifyOtp,
  createStaff,
  getProfile
};
