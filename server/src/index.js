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

// Initialize session store
const pgSessionStore = pgSession(session);

// Configure session middleware
app.use(
  session({
    store: new pgSessionStore({
      pool: db.pool, // Use the existing PostgreSQL pool
      tableName: "user_sessions", // Optional: Custom table name for sessions
    }),
    secret: process.env.SESSION_SECRET || "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production", // Set to true in production
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// CORS configuration
app.use(
  cors({
    origin: [process.env.CLIENT_URL, "https://food-recipe-sharing-y7rl.vercel.app"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


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

// Routes
app.use("/api", userRoutes);
app.use("/auth", authRoutes);

// Sync Sequelize and start the server
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database connected.");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
  });

export default app;