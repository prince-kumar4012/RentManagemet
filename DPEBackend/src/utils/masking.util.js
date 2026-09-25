export const maskPhone = (phone) => {
  if (!phone) return 'CV-LL-XXXX';
  const str = String(phone);
  if (str.length <= 6) return 'CV-LL-XXXX';
  return str.substring(0, 3) + '******' + str.substring(str.length - 2);
};

export const maskEmail = (email) => {
  if (!email) return 'contact@delhipropertyexchange.com';
  const [name, domain] = email.split('@');
  if (!domain) return 'contact@delhipropertyexchange.com';
  return name.substring(0, 2) + '****@' + domain;
};

export const maskOwnerDetails = (owner) => {
  if (!owner) return { name: 'Owner (DPX Verified)', phone: 'CV-LL-XXXX', email: 'contact@delhipropertyexchange.com' };
  return {
    id: owner._id || owner.id || 'CV-LL-502',
    name: `Owner (${owner._id ? String(owner._id).substring(18) : 'DPX Verified'})`,
    phone: maskPhone(owner.phone),
    email: maskEmail(owner.email),
    pointOfContact: 'Delhi Property Exchange Support Desk'
  };
};

export const maskTenantDetails = (tenant) => {
  if (!tenant) return { name: 'Tenant (DPX Verified)', phone: 'CV-TN-XXXX', email: 'contact@delhipropertyexchange.com' };
  return {
    id: tenant._id || tenant.id || 'CV-TN-809',
    name: `Occupied since ${tenant.leaseStartDate || 'Verification Date'}`,
    phone: maskPhone(tenant.phone),
    email: maskEmail(tenant.email),
    pointOfContact: 'Delhi Property Exchange Support Desk'
  };
};

export default {
  maskPhone,
  maskEmail,
  maskOwnerDetails,
  maskTenantDetails
};
