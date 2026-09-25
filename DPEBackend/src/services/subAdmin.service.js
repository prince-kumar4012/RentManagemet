import User from '../models/User.model.js';
import SubAdminDelegation from '../models/SubAdminDelegation.model.js';
import ROLES from '../constants/roles.js';

export const createSubAdminAccount = async (superAdminId, subAdminData) => {
  const user = await User.create({
    name: subAdminData.name.trim(),
    email: subAdminData.email ? subAdminData.email.toLowerCase().trim() : null,
    phone: subAdminData.phone ? subAdminData.phone.trim() : null,
    role: ROLES.ADMIN_PARTNER,
    isSelfRegistered: false,
    subAdminModules: subAdminData.modules || {
      payoutManager: false,
      verificationApprover: false,
      contentManager: false,
      supportManager: false,
      reportsViewer: true
    },
    canViewUnmaskedPII: Boolean(subAdminData.canViewUnmaskedPII)
  });

  const delegation = await SubAdminDelegation.create({
    subAdminUser: user._id,
    grantedBy: superAdminId,
    modulesEnabled: user.subAdminModules,
    canViewUnmaskedPII: user.canViewUnmaskedPII,
    actionAuditLog: [{ action: 'SUB_ADMIN_CREATED', targetResource: `User: ${user._id}` }]
  });

  return { user, delegation };
};

export const updateSubAdminPermissions = async (superAdminId, subAdminId, moduleToggles, canViewUnmaskedPII) => {
  const user = await User.findById(subAdminId);
  if (!user || user.role !== ROLES.ADMIN_PARTNER) {
    throw new Error('Sub-Admin / Admin Partner account not found');
  }

  if (moduleToggles) {
    user.subAdminModules = { ...user.subAdminModules, ...moduleToggles };
  }
  if (typeof canViewUnmaskedPII === 'boolean') {
    user.canViewUnmaskedPII = canViewUnmaskedPII;
  }

  await user.save();

  await SubAdminDelegation.findOneAndUpdate(
    { subAdminUser: subAdminId },
    {
      modulesEnabled: user.subAdminModules,
      canViewUnmaskedPII: user.canViewUnmaskedPII,
      $push: { actionAuditLog: { action: 'MODULE_PERMISSIONS_UPDATED', targetResource: `Modules: ${JSON.stringify(user.subAdminModules)}` } }
    },
    { upsert: true, new: true }
  );

  return user;
};

export const listSubAdmins = async () => {
  return User.find({ role: ROLES.ADMIN_PARTNER }).lean();
};

export default {
  createSubAdminAccount,
  updateSubAdminPermissions,
  listSubAdmins
};
