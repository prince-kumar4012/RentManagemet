import Property from '../models/Property.model.js';
import { RENT_STATUS } from '../constants/statuses.js';

export const getTenantRentalDetails = async (tenantId) => {
  const property = await Property.findOne({ tenant: tenantId })
    .populate('owner', 'name phone email')
    .lean();

  if (!property) {
    return {
      hasActiveLease: false,
      message: 'No active rental lease found for this account'
    };
  }

  return {
    hasActiveLease: true,
    propertyCode: property.propertyCode,
    title: property.title,
    locality: property.locality,
    monthlyRent: property.price,
    rentLabel: property.priceLabel,
    leaseStartDate: '2026-06-01',
    nextRentDueDate: '2026-09-05',
    rentStatus: RENT_STATUS.DUE,
    upiQrPayload: `upi://pay?pa=dpx@upi&pn=DelhiPropertyExchange&am=${property.price}&cu=INR`,
    ownerContact: 'Delhi Property Exchange Customer Support Desk (Owner PII Masked)'
  };
};

export const getTenantPaymentHistory = async (tenantId) => {
  return [
    {
      month: 'August 2026',
      amountPaid: 25000,
      paymentDate: '2026-08-03',
      paymentMode: 'UPI',
      receiptUrl: '/receipts/tenant-receipt-aug-2026.pdf',
      status: 'PAID'
    },
    {
      month: 'July 2026',
      amountPaid: 25000,
      paymentDate: '2026-07-04',
      paymentMode: 'UPI',
      receiptUrl: '/receipts/tenant-receipt-jul-2026.pdf',
      status: 'PAID'
    }
  ];
};

export default {
  getTenantRentalDetails,
  getTenantPaymentHistory
};
