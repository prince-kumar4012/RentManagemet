import { Router } from 'express';
import {
  getProperties,
  getOneProperty,
  createProperty,
  verifyInspection
} from '../controllers/property.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { authorizeRoles } from '../middlewares/role.middleware.js';
import { piiMaskingMiddleware } from '../middlewares/masking.middleware.js';
import ROLES from '../constants/roles.js';

const router = Router();

// Public property search
router.get('/', piiMaskingMiddleware, getProperties);
router.get('/:id', piiMaskingMiddleware, getOneProperty);

// Protected routes
router.use(authenticate);

router.post('/', authorizeRoles(ROLES.SUPER_ADMIN, ROLES.ADMIN_PARTNER, ROLES.FIELD_AGENT, ROLES.PROPERTY_OWNER), createProperty);
router.post('/verification', authorizeRoles(ROLES.SUPER_ADMIN, ROLES.ADMIN_PARTNER, ROLES.VERIFICATION_STAFF), verifyInspection);

export default router;
