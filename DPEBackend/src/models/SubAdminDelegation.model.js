import mongoose from 'mongoose';

const subAdminDelegationSchema = new mongoose.Schema(
  {
    subAdminUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    grantedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    modulesEnabled: {
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
    actionAuditLog: [
      {
        action: { type: String, required: true },
        targetResource: { type: String },
        timestamp: { type: Date, default: Date.now }
      }
    ]
  },
  { timestamps: true }
);

const SubAdminDelegation = mongoose.model('SubAdminDelegation', subAdminDelegationSchema);
export default SubAdminDelegation;
