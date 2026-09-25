import { Router } from 'express';
import {
  getMyRental,
  getPaymentHistory,
  raiseTenantRequest
} from '../controllers/tenantPortal.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { authorizeRoles } from '../middlewares/role.middleware.js';
import { piiMaskingMiddleware } from '../middlewares/masking.middleware.js';
import ROLES from '../constants/roles.js';

const router = Router();

router.use(authenticate);
router.use(authorizeRoles(ROLES.CUSTOMER, ROLES.SUPER_ADMIN, ROLES.ADMIN_PARTNER));
router.use(piiMaskingMiddleware);

router.get('/my-rental', getMyRental);
router.get('/payment-history', getPaymentHistory);
router.post('/raise-request', raiseTenantRequest);

export default router;
