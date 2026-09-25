import dotenv from 'dotenv';
dotenv.config();

export const env = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/delhi_property_exchange',
  jwt: {
    secret: process.env.JWT_SECRET || 'dpe_super_secret_jwt_key_2026_antigravity',
    accessExpiration: process.env.JWT_ACCESS_EXPIRATION || '1d',
    refreshExpiration: process.env.JWT_REFRESH_EXPIRATION || '7d'
  },
  corsOrigin: process.env.CORS_ORIGIN || '*',
  masterSuperAdmin: {
    name: process.env.MASTER_SUPER_ADMIN_NAME || 'Delhi Property Exchange Master Owner',
    email: process.env.MASTER_SUPER_ADMIN_EMAIL || 'owner@delhipropertyexchange.com',
    phone: process.env.MASTER_SUPER_ADMIN_PHONE || '9811000001'
  }
};

export default env;
