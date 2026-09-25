import app from './app.js';
import env from './config/env.config.js';
import connectDB from './config/db.config.js';
import { bootstrapMasterSuperAdmin } from './services/bootstrap.service.js';

const startServer = async () => {
  await connectDB();
  await bootstrapMasterSuperAdmin();

  app.listen(env.port, () => {
    console.log(`[DPEBackend] Express Server running in ${env.nodeEnv} mode on http://localhost:${env.port}`);
    console.log(`[DPEBackend] Health Check API: http://localhost:${env.port}/api/v1/health`);
  });
};

startServer();
