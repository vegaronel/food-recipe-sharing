// passportConfig.js
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import User from '../models/user.js'; // Adjust the path to your User model

passport.use(new LocalStrategy(
  { usernameField: 'email' },
  async (email, password, done) => {
    try {
      console.log(`Attempting to authenticate user with email: ${email}`);
      const user = await User.findOne({ where: { email: email.toLowerCase() } });
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }
      
      const isMatch = await user.validatePassword(password);
      if (!isMatch) {
        console.log('Password does not match.');
        return done(null, false, { message: 'Incorrect password.' });
      }
      console.log('Authentication successful.');
      return done(null, user);
    } catch (err) {
      console.error('Error during authentication:', err);
      return done(err);
    }
  }
));



passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});
