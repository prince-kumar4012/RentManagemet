import { Router } from 'express';
import authRoutes from './auth.routes.js';
import ownerPortalRoutes from './ownerPortal.routes.js';
import tenantPortalRoutes from './tenantPortal.routes.js';
import subAdminRoutes from './subAdmin.routes.js';
import propertyRoutes from './property.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/owner-portal', ownerPortalRoutes);
router.use('/tenant-portal', tenantPortalRoutes);
router.use('/admin/sub-admins', subAdminRoutes);
router.use('/properties', propertyRoutes);

router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Delhi Property Exchange Clean MVC Backend API is healthy & running!',
    timestamp: new Date().toISOString()
  });
});

export default router;
