export const formatIndianPhone = (input) => {
  if (!input) return null;
  const digitsOnly = String(input).replace(/\D/g, '');
  if (digitsOnly.length === 10) {
    return `+91${digitsOnly}`;
  }
  if (digitsOnly.length === 12 && digitsOnly.startsWith('91')) {
    return `+${digitsOnly}`;
  }
  return input;
};

export const isValidEmail = (email) => {
  if (!email) return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const isValidIndianMobile = (phone) => {
  if (!phone) return false;
  const digitsOnly = String(phone).replace(/\D/g, '');
  return (digitsOnly.length === 10 && /^[6-9]\d{9}$/.test(digitsOnly)) ||
         (digitsOnly.length === 12 && digitsOnly.startsWith('91') && /^[6-9]\d{9}$/.test(digitsOnly.substring(2)));
};

export default {
  formatIndianPhone,
  isValidEmail,
  isValidIndianMobile
};
