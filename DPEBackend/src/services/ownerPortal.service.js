import Property from '../models/Property.model.js';
import Inspection from '../models/Inspection.model.js';
import { PROPERTY_STATUS, RENT_STATUS } from '../constants/statuses.js';

export const getOwnerProperties = async (ownerId) => {
  const properties = await Property.find({ owner: ownerId })
    .populate('tenant', 'name phone email leaseStartDate')
    .lean();

  return properties.map(p => ({
    id: p._id,
    propertyCode: p.propertyCode,
    title: p.title,
    locality: p.locality,
    areaName: p.areaName,
    priceLabel: p.priceLabel,
    status: p.status,
    statusBadge: p.status === PROPERTY_STATUS.RENTED ? 'RENTED' : (p.status === PROPERTY_STATUS.VACANT ? 'VACANT' : 'UNDER VERIFICATION'),
    tenancyDetails: p.tenant ? {
      occupiedSince: p.tenant.leaseStartDate || 'Recent Lease',
      rentStatus: RENT_STATUS.PAID,
      dueOnDate: '5th of every month',
      expectedVacateDate: '31st Dec 2026'
    } : null
  }));
};

export const getOwnerPayoutHistory = async (ownerId) => {
  // Returns month-by-month rent payout ledger for the owner
  return [
    {
      month: 'August 2026',
      totalCollectedFromTenant: 25000,
      commissionDeducted: 375, // 1.5% flat fee
      netPaidToOwner: 24625,
      payoutDate: '2026-08-05',
      payoutMode: 'UPI / Bank Transfer',
      receiptPdfUrl: '/receipts/payout-aug-2026.pdf',
      status: 'PAID'
    },
    {
      month: 'July 2026',
      totalCollectedFromTenant: 25000,
      commissionDeducted: 375,
      netPaidToOwner: 24625,
      payoutDate: '2026-07-05',
      payoutMode: 'UPI / Bank Transfer',
      receiptPdfUrl: '/receipts/payout-jul-2026.pdf',
      status: 'PAID'
    }
  ];
};

export const getOwnerActivityLog = async (ownerId) => {
  return [
    { date: '2026-08-10', activity: '6-Month Periodic Inspection completed by Verification Staff. Health Check: EXCELLENT.' },
    { date: '2026-08-05', activity: 'August Monthly Rent Payout (₹ 24,625) transferred to owner bank account.' },
    { date: '2026-06-01', activity: 'New Verified Tenant onboarded for Property CV-PR-1024.' }
  ];
};

export const getOwnerInspectionReports = async (ownerId) => {
  const properties = await Property.find({ owner: ownerId }).select('_id');
  const propIds = properties.map(p => p._id);

  return Inspection.find({ property: { $in: propIds } }).populate('property', 'propertyCode title').lean();
};

export default {
  getOwnerProperties,
  getOwnerPayoutHistory,
  getOwnerActivityLog,
  getOwnerInspectionReports
};
