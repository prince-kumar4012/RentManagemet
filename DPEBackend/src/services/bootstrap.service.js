import User from "../models/User.model.js";
import env from "../config/env.config.js";
import ROLES from "../constants/roles.js";

export const bootstrapMasterSuperAdmin = async () => {
  try {
    const masterEmail = env.masterSuperAdmin.email.toLowerCase().trim();
    const masterPhone = env.masterSuperAdmin.phone ? env.masterSuperAdmin.phone.trim() : null;

    // Remove any legacy/test Super Admins that do not match configured Master Owner credentials
    await User.deleteMany({
      role: ROLES.SUPER_ADMIN,
      email: { $ne: masterEmail }
    });

    // Check if user with Master Owner email or phone already exists
    let masterUser = await User.findOne({
      $or: [{ email: masterEmail }, ...(masterPhone ? [{ phone: masterPhone }] : [])]
    });

    if (masterUser) {
      // Ensure master user has SUPER_ADMIN role & permissions
      masterUser.role = ROLES.SUPER_ADMIN;
      masterUser.name = env.masterSuperAdmin.name;
      masterUser.email = masterEmail;
      masterUser.phone = masterPhone;
      masterUser.canViewUnmaskedPII = true;
      masterUser.isSelfRegistered = false;
      await masterUser.save();
      console.log(`[Bootstrap] ✅ Master Super Admin synced: ${masterUser.email} (${masterUser.role})`);
    } else {
      masterUser = await User.create({
        name: env.masterSuperAdmin.name,
        email: masterEmail,
        phone: masterPhone,
        role: ROLES.SUPER_ADMIN,
        isSelfRegistered: false,
        canViewUnmaskedPII: true
      });
      console.log(`[Bootstrap] ✅ Master Super Admin created successfully: ${masterUser.email}`);
    }
  } catch (error) {
    console.error(`[Bootstrap] ❌ Failed to bootstrap Master Super Admin: ${error.message}`);
  }
};

export default { bootstrapMasterSuperAdmin };
