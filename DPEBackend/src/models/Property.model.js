import mongoose from 'mongoose';
import { PROPERTY_STATUS } from '../constants/statuses.js';

const propertySchema = new mongoose.Schema(
  {
    propertyCode: {
      type: String,
      unique: true,
      required: true,
      default: () => `CV-PR-${Math.floor(1000 + Math.random() * 9000)}`
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: { type: String, trim: true },
    propertyType: {
      type: String,
      enum: ['BUILDER_FLOOR', 'APARTMENT', 'INDEPENDENT_HOUSE', 'COMMERCIAL', 'PLOT'],
      required: true
    },
    purpose: {
      type: String,
      enum: ['BUY', 'RENT', 'SALE'],
      required: true
    },
    price: { type: Number, required: true },
    priceLabel: { type: String, required: true },
    areaSqFt: { type: Number, required: true },
    bhk: { type: Number, default: 2 },
    bathrooms: { type: Number, default: 2 },
    floor: { type: String, default: '1st Floor' },
    locality: { type: String, required: true, trim: true },
    areaName: { type: String, required: true, default: 'Uttam Nagar' },
    metroDistance: { type: String, default: '500m from Metro' },
    status: {
      type: String,
      enum: Object.values(PROPERTY_STATUS),
      default: PROPERTY_STATUS.UNDER_VERIFICATION
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    tenant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null
    },
    verifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null
    },
    verificationReport: {
      inspectionDate: { type: Date },
      status: { type: String, enum: ['PENDING', 'PASSED', 'FAILED'], default: 'PENDING' },
      notes: { type: String }
    },
    images: [{ type: String }],
    walkthroughVideoUrl: { type: String, default: null }
  },
  { timestamps: true }
);

propertySchema.index({ areaName: 1, purpose: 1, status: 1 });

const Property = mongoose.model('Property', propertySchema);
export default Property;
