import pkg from "pg";
import dotenv from "dotenv";

const { Pool } = pkg;

// Load environment variables
dotenv.config();

// Determine connection configuration
const isProduction = process.env.NODE_ENV === 'production';
const connectionConfig = isProduction 
  ? {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    }
  : {
      user: process.env.PG_USER,
      host: process.env.PG_HOST,
      database: process.env.PG_DATABASE,
      password: process.env.PG_PASSWORD,
      port: process.env.PG_PORT,
    };

// Create a connection pool
const pool = new Pool(connectionConfig);

pool.on("connect", () => {
  console.log(`Connected to ${isProduction ? 'Supabase' : 'local'} database`);
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
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
      date_upload TIMESTAMP,
      created_at TIMESTAMP DEFAULT NOW()
    )`;

  const userSessionsTableQuery = `
    CREATE TABLE IF NOT EXISTS user_sessions (
      sid VARCHAR(255) NOT NULL PRIMARY KEY,
      sess JSON NOT NULL,
      expire TIMESTAMP(6) NOT NULL
    )`;

  try {
    await pool.query(userTableQuery);
    await pool.query(recipeTableQuery);
    await pool.query(userSessionsTableQuery);

    console.log('All tables created successfully or already exist');
  } catch (error) {
    console.error('Error creating tables:', error);
  }
};

// Export the pool and createTableIfNotExist function
export default {
  pool,
  query: (text, params) => pool.query(text, params),
  createTableIfNotExist,
};