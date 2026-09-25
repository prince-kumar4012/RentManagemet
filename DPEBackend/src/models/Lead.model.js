import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, lowercase: true, trim: true, default: null },
    purpose: { type: String, enum: ['BUY', 'RENT', 'SALE'], default: 'BUY' },
    areaName: { type: String, default: 'Uttam Nagar' },
    budgetMax: { type: Number },
    status: {
      type: String,
      enum: ['NEW', 'CONTACTED', 'QUALIFIED', 'SITE_VISIT_SCHEDULED', 'DEAL_CLOSED', 'LOST'],
      default: 'NEW'
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null
    },
    sourceChannel: { type: String, default: 'WEBSITE' },
    notes: { type: String }
  },
  { timestamps: true }
);

const Lead = mongoose.model('Lead', leadSchema);
export default Lead;
