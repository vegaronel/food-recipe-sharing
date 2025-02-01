import pkg from "pg";
import dotenv from "dotenv";

const { Pool } = pkg;

// Load environment variables
dotenv.config();

// Create a connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.on("connect", () => {
  console.log("Connected to the database");
});

// Function to create tables if they don't exist
const createTableIfNotExist = async () => {
  const userTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY, 
      username VARCHAR(250) NOT NULL,
      first_name VARCHAR(250) NOT NULL,
      last_name VARCHAR(250) NOT NULL,
      full_name VARCHAR(300),
      email VARCHAR(250) NOT NULL,
      password TEXT NOT NULL,
      profile_picture TEXT,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    )`;

  const recipeTableQuery = `
    CREATE TABLE IF NOT EXISTS recipe (
      id SERIAL PRIMARY KEY,
      recipe_name VARCHAR(250) NOT NULL,
      recipe_type VARCHAR(200) NOT NULL,
      recipe_description TEXT,
      time_to_cook INTEGER,
      difficulty VARCHAR(20) NOT NULL,
      img_url TEXT,
      image_alt TEXT,
      date_upload DATE
    )`;

  try {
    await pool.query(userTableQuery);
    console.log("Users table created or already exists");
    await pool.query(recipeTableQuery);
    console.log("Recipe table created or already exists");
  } catch (error) {
    console.error("Error creating tables:", error);
  }
};

// Export the pool and createTableIfNotExist function
export default {
  pool,
  query: (text, params) => pool.query(text, params),
  createTableIfNotExist,
};