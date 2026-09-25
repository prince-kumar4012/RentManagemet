import mongoose from 'mongoose';
import ROLES from '../constants/roles.js';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      default: null
    },
    phone: {
      type: String,
      trim: true,
      default: null
    },
    role: {
      type: String,
      enum: Object.values(ROLES),
      default: ROLES.CUSTOMER
    },
    isSelfRegistered: {
      type: Boolean,
      default: true
    },
    subAdminModules: {
      payoutManager: { type: Boolean, default: false },
      verificationApprover: { type: Boolean, default: false },
      contentManager: { type: Boolean, default: false },
      supportManager: { type: Boolean, default: false },
      reportsViewer: { type: Boolean, default: false }
    },
    canViewUnmaskedPII: {
      type: Boolean,
      default: false
    },
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Organization',
      default: null
    },
    branch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Branch',
      default: null
    },
    isActive: {
      type: Boolean,
      default: true
    },
    isVerified: {
      type: Boolean,
      default: false
    },
    avatar: {
      type: String,
      default: null
    }
  },
  {
    timestamps: true
  }
);

userSchema.index({ role: 1 });
userSchema.index({ email: 1 }, { unique: true, partialFilterExpression: { email: { $type: 'string' } } });
userSchema.index({ phone: 1 }, { unique: true, partialFilterExpression: { phone: { $type: 'string' } } });

// Single Super Admin Security Guard: Prevent creation of multiple Super Admins
userSchema.pre('save', async function (next) {
  if (this.role === ROLES.SUPER_ADMIN) {
    const existingSuperAdmin = await mongoose.model('User').findOne({
      role: ROLES.SUPER_ADMIN,
      _id: { $ne: this._id }
    });
    if (existingSuperAdmin) {
      return next(
        new Error('SECURITY BLOCK: Only 1 Master Super Admin is allowed in Delhi Property Exchange. Multiple Super Admin creation is prohibited.')
      );
    }
  }
  next();
});

const User = mongoose.model('User', userSchema);
export default User;
