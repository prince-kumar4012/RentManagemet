import { Router } from 'express';
import {
  createSubAdmin,
  updatePermissions,
  getAllSubAdmins
} from '../controllers/subAdmin.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { authorizeRoles } from '../middlewares/role.middleware.js';
import ROLES from '../constants/roles.js';

const router = Router();

router.use(authenticate);
router.use(authorizeRoles(ROLES.SUPER_ADMIN));

router.post('/', createSubAdmin);
router.get('/', getAllSubAdmins);
router.patch('/:id/permissions', updatePermissions);

export default router;
