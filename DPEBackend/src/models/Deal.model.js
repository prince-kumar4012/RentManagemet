import mongoose from 'mongoose';

const dealSchema = new mongoose.Schema(
  {
    dealCode: {
      type: String,
      unique: true,
      required: true,
      default: () => `CV-DL-${Math.floor(1000 + Math.random() * 9000)}`
    },
    property: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Property',
      required: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    tenantOrBuyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    fieldAgent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null
    },
    agreedAmount: { type: Number, required: true },
    flatCommissionFeePercentage: { type: Number, default: 1.5 },
    commissionAmount: { type: Number, required: true },
    status: {
      type: String,
      enum: ['PENDING', 'APPROVED', 'COMPLETED', 'CANCELLED'],
      default: 'PENDING'
    },
    notes: { type: String }
  },
  { timestamps: true }
);

const Deal = mongoose.model('Deal', dealSchema);
export default Deal;
