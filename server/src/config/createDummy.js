// scripts/createDummyUser.js
import sequelize from './sequelize.js';
import User from '../models/user.js';

async function createDummyUser() {
  try {
    // Ensure the database connection is established
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Sync all models
    await sequelize.sync();

    // Create a dummy user
    const dummyUser = await User.create({
      username: 'dummyuser',
      first_name: 'Dummy',
      last_name: 'User',
      full_name: 'Dummy User',
      email: 'ronelvega31@gmail.com',
      password: 'admin123', // This will be hashed automatically
      profile_picture: null,
    });

    console.log('Dummy user created successfully:', dummyUser.toJSON());
  } catch (error) {
    console.error('Error creating dummy user:', error);
  } finally {
    // Close the database connection
    await sequelize.close();
  }
}

createDummyUser();
