import { isValidEmail, isValidIndianMobile } from '../utils/phone.util.js';

export const validateRequestOtpInput = (data) => {
  const errors = [];

  if (!data.identifier) {
    errors.push('Gmail ID ya 10-Digit Mobile Number dena zaruri hai');
  } else {
    const isEmail = isValidEmail(data.identifier);
    const isPhone = isValidIndianMobile(data.identifier);
    if (!isEmail && !isPhone) {
      errors.push('Kripya valid Gmail ID (e.g. user@gmail.com) YA 10-digit Indian Mobile Number enter karein');
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

export const validateVerifyOtpInput = (data) => {
  const errors = [];

  if (!data.identifier) {
    errors.push('Gmail ID ya Mobile Number dena zaruri hai');
  }

  if (!data.otp) {
    errors.push('6-Digit OTP code dena zaruri hai');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

export default {
  validateRequestOtpInput,
  validateVerifyOtpInput
};
