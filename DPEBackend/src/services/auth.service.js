import User from '../models/User.model.js';
import SubAdminDelegation from '../models/SubAdminDelegation.model.js';
import { formatIndianPhone } from '../utils/phone.util.js';
import ROLES from '../constants/roles.js';

export const createStaffAccountBySuperAdmin = async (superAdminId, staffData) => {
  const cleanPhone = staffData.phone ? formatIndianPhone(staffData.phone) : null;
  const cleanEmail = staffData.email ? staffData.email.toLowerCase().trim() : null;

  if (!cleanEmail && !cleanPhone) {
    throw new Error('Staff account create karne ke liye Gmail ID ya Mobile Number dena zaruri hai.');
  }

  // Check duplicate
  const queryOr = [];
  if (cleanEmail) queryOr.push({ email: cleanEmail });
  if (cleanPhone) queryOr.push({ phone: cleanPhone });

  const existing = await User.findOne({ $or: queryOr });
  if (existing) {
    throw new Error('Yeh Gmail ID ya Mobile Number pehle se registered hai.');
  }

  if (staffData.role === ROLES.SUPER_ADMIN) {
    throw new Error('SECURITY BLOCK: Super Admin role cannot be created via Staff Management. Only 1 Master Super Admin is permitted in Delhi Property Exchange.');
  }

  const staffRole = staffData.role && Object.values(ROLES).includes(staffData.role)
    ? staffData.role
    : ROLES.TELE_CALLER;

  const user = await User.create({
    name: staffData.name.trim(),
    email: cleanEmail,
    phone: cleanPhone,
    role: staffRole,
    isSelfRegistered: false,
    subAdminModules: staffData.subAdminModules || {
      payoutManager: false,
      verificationApprover: false,
      contentManager: false,
      supportManager: false,
      reportsViewer: true
    },
    canViewUnmaskedPII: Boolean(staffData.canViewUnmaskedPII),
    branch: staffData.branchId || null
  });

  if (staffRole === ROLES.ADMIN_PARTNER) {
    await SubAdminDelegation.create({
      subAdminUser: user._id,
      grantedBy: superAdminId,
      modulesEnabled: user.subAdminModules,
      canViewUnmaskedPII: user.canViewUnmaskedPII,
      actionAuditLog: [{ action: 'STAFF_ACCOUNT_CREATED', targetResource: `Staff: ${user._id}` }]
    });
  }

  return user;
};

export const getUserById = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error('User account not found');
  }
  return user;
};

export default {
  createStaffAccountBySuperAdmin,
  getUserById
};
