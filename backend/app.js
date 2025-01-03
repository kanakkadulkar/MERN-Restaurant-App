import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from './database/dbConnection.js';
import { errorMiddleware } from './middlewares/error.js';
import reservationRouter from './routes/reservationRoute.js';

const app = express();
dotenv.config({ path: './config/config.env' });

// Set allowed frontend URL based on the environment (local or production)
const allowedOrigin = process.env.NODE_ENV === 'development'
  ? process.env.FRONTEND_URL
  : process.env.DEPLOYED_FRONTEND_URL;

app.use(cors({
  origin: allowedOrigin,  // Allow either local or deployed frontend URL
  methods: ['POST'],
  credentials: true,  // For handling cookies or authentication tokens
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/reservation', reservationRouter);

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN",
  });
});

dbConnection();

// Error handling middleware
app.use(errorMiddleware);

export default app;
