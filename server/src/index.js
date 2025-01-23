import express from "express"
import env from "dotenv"
import cors from "cors"
import db from "./config/db.js";
import session from 'express-session';
import bodyParser from 'body-parser';
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import passport from "passport";
import "./config/passport.js"
import bcrypt from "bcrypt";

import sequelize from "./config/sequelize.js";
  
const app = express();
const PORT = process.env.PORT || 3000;

env.config();

app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  },
}));

app.use(passport.initialize());
app.use(passport.session());

// CORS configuration
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CREATE TABLE FOR POSTGRES
db.createTableIfNotExist();

// Routes
app.use("/api", userRoutes);
app.use('/auth', authRoutes);

sequelize.sync({ force: false }).then(() => {
  console.log('Database connected.');
  app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Database connection failed:', err.message);
});