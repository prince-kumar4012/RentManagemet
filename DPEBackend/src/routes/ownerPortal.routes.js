import { Router } from 'express';
import {
  getMyProperties,
  getPayouts,
  getActivityLog,
  getInspections,
  raiseSupportRequest
} from '../controllers/ownerPortal.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { authorizeRoles } from '../middlewares/role.middleware.js';
import { piiMaskingMiddleware } from '../middlewares/masking.middleware.js';
import ROLES from '../constants/roles.js';

const router = Router();

router.use(authenticate);
router.use(authorizeRoles(ROLES.PROPERTY_OWNER, ROLES.SUPER_ADMIN, ROLES.ADMIN_PARTNER));
router.use(piiMaskingMiddleware);

router.get('/properties', getMyProperties);
router.get('/payouts', getPayouts);
router.get('/activity-log', getActivityLog);
router.get('/inspections', getInspections);
router.post('/raise-request', raiseSupportRequest);

export default router;
