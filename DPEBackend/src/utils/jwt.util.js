import jwt from 'jsonwebtoken';
import env from '../config/env.config.js';

export const generateAccessToken = (payload) => {
  return jwt.sign(payload, env.jwt.secret, {
    expiresIn: env.jwt.accessExpiration
  });
};

export const generateRefreshToken = (payload) => {
  return jwt.sign(payload, env.jwt.secret, {
    expiresIn: env.jwt.refreshExpiration
  });
};

export const verifyToken = (token) => {
  return jwt.verify(token, env.jwt.secret);
};

export default {
  generateAccessToken,
  generateRefreshToken,
  verifyToken
};
