import { Router } from 'express';
import { requestOtp, verifyOtp, createStaff, getProfile } from '../controllers/auth.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { authorizeRoles } from '../middlewares/role.middleware.js';
import ROLES from '../constants/roles.js';

const router = Router();

// Password-less OTP authentication endpoints for ALL roles
router.post('/send-otp', requestOtp);
router.post('/verify-otp', verifyOtp);
router.post('/otp/request', requestOtp);
router.post('/otp/verify', verifyOtp);

// Super Admin internal staff creation endpoint
router.post('/admin/create-staff', authenticate, authorizeRoles(ROLES.SUPER_ADMIN), createStaff);

// Protected profile endpoint
router.get('/me', authenticate, getProfile);

export default router;
