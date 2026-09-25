import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import corsOptions from './config/cors.config.js';
import apiRoutes from './routes/index.js';
import { errorHandler, notFoundHandler } from './middlewares/error.middleware.js';

const app = express();

// Rate limiting for API protection
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  message: { success: false, message: 'Too many requests from this IP, please try again after 15 minutes.' }
});

app.use(limiter);
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount API Master Router
app.use('/api/v1', apiRoutes);

// Global Error Handlers
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
