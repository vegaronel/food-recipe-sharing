import pkg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pkg

// Load environment variables from .env file
dotenv.config();

// Create a connection pool
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT || 5432, // Default PostgreSQL port
});

pool.on('connect', () => {
  console.log('Connected to the database');
});



const createTableIfNotExist = async () => {
  const userTableQuery = `CREATE TABLE users (
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
    )`

    const recipeTableQuery = `(
    CREATE TABLE recipe(
    id SERIAL PRIMARY KEY,
      recipe_name VARCHAR(250) NOT NULL,
      recipe_type VARCHAR(200) NOT NULL,
      recipe_description TEXT,
      time_to_cook INTEGER,
      difficulty VARCHAR(20) NOT NULL,
      img_url TEXT,
      image_alt TEXT,
      date_upload DATE
	
)
    )`

    try{
      try{
      await pool.query(userTableQuery);
      await pool.query(recipeTableQuery);
      }catch(error) {
        console.log("Table is already existed");
      }
    }catch(error) {
      console.log("Error creating table ", error);
    }
}

export default {
  query: (text, params) => pool.query(text, params),
  createTableIfNotExist,
};