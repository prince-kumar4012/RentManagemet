import Property from '../models/Property.model.js';
import Inspection from '../models/Inspection.model.js';
import { PROPERTY_STATUS } from '../constants/statuses.js';

export const listProperties = async (filters = {}) => {
  const query = { status: PROPERTY_STATUS.VACANT };
  if (filters.areaName && filters.areaName !== 'ALL') query.areaName = filters.areaName;
  if (filters.bhk && filters.bhk !== 'ALL') query.bhk = Number(filters.bhk);
  if (filters.purpose) query.purpose = filters.purpose;

  return Property.find(query)
    .populate('owner', 'name phone email')
    .populate('tenant', 'name phone email')
    .sort({ createdAt: -1 })
    .lean();
};

export const getPropertyById = async (id) => {
  return Property.findById(id)
    .populate('owner', 'name phone email')
    .populate('tenant', 'name phone email')
    .lean();
};

export const createPropertyListing = async (propertyData, ownerId) => {
  const property = await Property.create({
    ...propertyData,
    owner: ownerId,
    status: PROPERTY_STATUS.UNDER_VERIFICATION
  });
  return property;
};

export const verifyPropertyInspection = async (propertyId, staffId, inspectionData) => {
  const property = await Property.findById(propertyId);
  if (!property) throw new Error('Property not found');

  const inspection = await Inspection.create({
    property: propertyId,
    verificationStaff: staffId,
    healthCheck: inspectionData.healthCheck,
    photosCaptured: inspectionData.photosCaptured || [],
    walkthroughVideo: inspectionData.walkthroughVideo || null,
    status: inspectionData.status || 'PASSED',
    notes: inspectionData.notes
  });

  property.verifiedBy = staffId;
  property.verificationReport = {
    inspectionDate: new Date(),
    status: inspectionData.status || 'PASSED',
    notes: inspectionData.notes
  };

  if (inspectionData.status === 'PASSED') {
    property.status = PROPERTY_STATUS.VACANT;
  }

  await property.save();

  return { property, inspection };
};

export default {
  listProperties,
  getPropertyById,
  createPropertyListing,
  verifyPropertyInspection
};
