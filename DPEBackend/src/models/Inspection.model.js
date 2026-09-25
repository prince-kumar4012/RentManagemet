import mongoose from 'mongoose';

const inspectionSchema = new mongoose.Schema(
  {
    property: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Property',
      required: true
    },
    verificationStaff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    visitDate: { type: Date, default: Date.now },
    healthCheck: {
      plumbing: { type: String, enum: ['GOOD', 'FAIR', 'NEEDS_REPAIR'], default: 'GOOD' },
      electrical: { type: String, enum: ['GOOD', 'FAIR', 'NEEDS_REPAIR'], default: 'GOOD' },
      wallsAndPaint: { type: String, enum: ['GOOD', 'FAIR', 'NEEDS_REPAIR'], default: 'GOOD' },
      overallCondition: { type: String, enum: ['EXCELLENT', 'GOOD', 'FAIR', 'POOR'], default: 'GOOD' }
    },
    photosCaptured: [{ type: String }],
    walkthroughVideo: { type: String, default: null },
    status: {
      type: String,
      enum: ['PASSED', 'FAILED', 'NEEDS_REINSPECTION'],
      default: 'PASSED'
    },
    notes: { type: String }
  },
  { timestamps: true }
);

const Inspection = mongoose.model('Inspection', inspectionSchema);
export default Inspection;
