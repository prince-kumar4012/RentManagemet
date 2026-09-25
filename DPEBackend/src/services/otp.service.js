import User from '../models/User.model.js';
import OtpStore from '../models/OtpStore.model.js';
import { formatIndianPhone, isValidEmail, isValidIndianMobile } from '../utils/phone.util.js';
import { generateAccessToken, generateRefreshToken } from '../utils/jwt.util.js';
import ROLES from '../constants/roles.js';
import env from '../config/env.config.js';

// Self-Signup Public Roles (Field Agent, Property Owner, Customer)
const SELF_SIGNUP_ROLES = [ROLES.FIELD_AGENT, ROLES.PROPERTY_OWNER, ROLES.CUSTOMER];

export const sendOtpService = async (identifier, requestedRole, name = null) => {
  const cleanId = String(identifier).trim();
  const isEmail = isValidEmail(cleanId);
  const cleanPhone = isEmail ? null : formatIndianPhone(cleanId);
  const cleanEmail = isEmail ? cleanId.toLowerCase() : null;

  if (!isEmail && !isValidIndianMobile(cleanId)) {
    return {
      success: false,
      message: 'Kripya sahi 10-Digit Mobile Number YA valid Gmail ID enter karein.'
    };
  }

  // Find user by Email or Phone
  const query = isEmail ? { email: cleanEmail } : { phone: cleanPhone };
  let user = await User.findOne(query);

  // Master Super Admin Override Check
  const masterEmail = env.masterSuperAdmin.email ? env.masterSuperAdmin.email.toLowerCase().trim() : '';
  const masterPhone = env.masterSuperAdmin.phone ? env.masterSuperAdmin.phone.trim() : '';
  const isMasterOwner = (cleanEmail && cleanEmail === masterEmail) || (cleanPhone && cleanPhone === masterPhone);

  if (isMasterOwner) {
    if (!user) {
      user = await User.create({
        name: env.masterSuperAdmin.name,
        email: masterEmail || null,
        phone: masterPhone || null,
        role: ROLES.SUPER_ADMIN,
        isSelfRegistered: false,
        canViewUnmaskedPII: true
      });
    } else if (user.role !== ROLES.SUPER_ADMIN) {
      user.role = ROLES.SUPER_ADMIN;
      user.canViewUnmaskedPII = true;
      await user.save();
    }
  }

  // Handle Unregistered / Unknown Identifiers
  if (!user) {
    // Only auto-create if an explicit self-signup role (FIELD_AGENT, PROPERTY_OWNER, CUSTOMER) is passed
    if (requestedRole && SELF_SIGNUP_ROLES.includes(requestedRole)) {
      const displayName = name ? name.trim() : (isEmail ? cleanEmail.split('@')[0] : `User (${cleanPhone.substring(8)})`);
      user = await User.create({
        name: displayName,
        email: cleanEmail,
        phone: cleanPhone,
        role: requestedRole,
        isSelfRegistered: true
      });
    } else {
      // Unregistered Email/Phone without signup role -> Reject with clear error!
      throw new Error(`Yeh ${isEmail ? 'Gmail ID' : 'Mobile Number'} (${isEmail ? cleanEmail : cleanPhone}) Delhi Property Exchange me registered nahi hai. Kripya pehle Signup karein ya sahi registered credentials enter karein.`);
    }
  }

  if (!user.isActive) {
    throw new Error('Aapka account deactivated hai. Kripya Administrator se sampark karein.');
  }

  const generatedOtp = '123456'; // Default static OTP for dev/testing
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

  await OtpStore.create({
    identifier: isEmail ? cleanEmail : cleanPhone,
    otp: generatedOtp,
    expiresAt
  });

  return {
    success: true,
    message: `OTP sent successfully to ${isEmail ? cleanEmail : cleanPhone}. (Dev Test OTP: 123456)`,
    identifier: isEmail ? cleanEmail : cleanPhone,
    role: user.role,
    isNewUser: !user.createdAt || (Date.now() - new Date(user.createdAt).getTime() < 5000)
  };
};

export const verifyOtpService = async (identifier, otp) => {
  const cleanId = String(identifier).trim();
  const isEmail = isValidEmail(cleanId);
  const cleanPhone = isEmail ? null : formatIndianPhone(cleanId);
  const cleanEmail = isEmail ? cleanId.toLowerCase() : null;

  const targetId = isEmail ? cleanEmail : cleanPhone;

  // Verify OTP from OtpStore or dev fallback
  const otpRecord = await OtpStore.findOne({ identifier: targetId }).sort({ createdAt: -1 });

  const isValidDevOtp = String(otp) === '123456';
  const isValidDbOtp = otpRecord && otpRecord.otp === String(otp) && new Date() < new Date(otpRecord.expiresAt);

  if (!isValidDevOtp && !isValidDbOtp) {
    throw new Error('Galat ya Expired OTP! Kripya naya OTP request karein.');
  }

  // Mark verified
  if (otpRecord) {
    otpRecord.isVerified = true;
    await otpRecord.save();
  }

  const query = isEmail ? { email: cleanEmail } : { phone: cleanPhone };
  const user = await User.findOne(query);

  if (!user) {
    throw new Error('User record not found for this identifier');
  }

  const payload = {
    id: user._id,
    role: user.role,
    email: user.email,
    phone: user.phone,
    canViewUnmaskedPII: user.canViewUnmaskedPII
  };

  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      subAdminModules: user.subAdminModules,
      canViewUnmaskedPII: user.canViewUnmaskedPII,
      recordCode: user.role === ROLES.PROPERTY_OWNER ? `CV-LL-${String(user._id).substring(18)}` : (user.role === ROLES.CUSTOMER ? `CV-TN-${String(user._id).substring(18)}` : `CV-US-${String(user._id).substring(18)}`)
    },
    tokens: {
      accessToken,
      refreshToken
    }
  };
};

export default {
  sendOtpService,
  verifyOtpService
};
