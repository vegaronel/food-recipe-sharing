import express from "express";
import env from "dotenv";
import cors from "cors";
import db from "./config/db.js";
import session from "express-session";
import pgSession from "connect-pg-simple";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import passport from "passport";
import "./config/passport.js";
import sequelize from "./config/sequelize.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Load environment variables
env.config();

// CORS configuration - Move this before session middleware
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:5173",
    "http://localhost:5174",
    "https://food-recipe-sharing-y7rl.vercel.app",
    "https://food-recipe-sharing-one.vercel.app",
    process.env.CLIENT_URL
  ].filter(Boolean),
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight requests

// Initialize session store
const pgSessionStore = pgSession(session);

// Configure session middleware
app.use(
  session({
    store: new pgSessionStore({
      pool: db.pool,
      tableName: "user_sessions",
    }),
    secret: process.env.SESSION_SECRET || "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: 'none',
      maxAge: 24 * 60 * 60 * 1000
    },
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Body parser middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create tables if they don't exist
db.createTableIfNotExist();

// Test route
app.get("/", (req, res) => {
  res.json("WORKING NA POTANG INANG DEPLOY YAN");
});

// Logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes); // Mount user routes for recipes

// Catch-all route handler to log unexpected routes
app.use((req, res, next) => {
  console.warn(`Unexpected route accessed: ${req.method} ${req.path}`);
  next();
});

sequelize.sync({ force: false }).then(() => {
  console.log("Database connected.");
}).catch((err) => {
  console.error("Database connection failed:", err.message);
});

// Add a global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    message: 'An unexpected error occurred',
    error: err.message
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;