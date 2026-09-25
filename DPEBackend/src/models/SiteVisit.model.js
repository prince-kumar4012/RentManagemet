import mongoose from 'mongoose';
import { SITE_VISIT_STATUS } from '../constants/statuses.js';

const siteVisitSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    property: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Property'
    },
    scheduledDate: { type: Date, required: true },
    timeSlot: { type: String, default: 'MORNING (10 AM - 1 PM)' },
    assignedStaff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null
    },
    status: {
      type: String,
      enum: Object.values(SITE_VISIT_STATUS),
      default: SITE_VISIT_STATUS.SCHEDULED
    },
    notes: { type: String }
  },
  { timestamps: true }
);

const SiteVisit = mongoose.model('SiteVisit', siteVisitSchema);
export default SiteVisit;
