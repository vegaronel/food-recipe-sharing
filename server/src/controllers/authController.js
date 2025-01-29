import passport from 'passport';
import User from "../models/user.js";

export const login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({ 
        success: false,
        message: 'An error occurred during authentication.'
      });
    }

    if (!user) {
      return res.status(401).json({ 
        success: false,
        message: info.message || 'Authentication failed.'
      });
    }

    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ 
          success: false,
          message: 'Failed to establish session.'
        });
      }

      const safeUser = {
        id: user.id,
        email: user.email,
        username: user.username,
        full_name: user.full_name,
        first_name: user.first_name,
        last_name: user.last_name
      };

      return res.json({
        success: true,
        message: 'Logged in successfully',
        user: safeUser
      });
    });
  })(req, res, next);
};
export const getUser = (req, res) => {
  if (req.isAuthenticated()) {
    const user = req.user;
    res.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        full_name: user.full_name,
        first_name: user.first_name,
        last_name: user.last_name
      }
    });
  } else {
    res.status(401).json({ 
      success: false,
      message: 'Not authenticated' 
    });
  }
};

export const logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ 
        success: false,
        message: 'Error during logout' 
      });
    }
    res.json({ 
      success: true,
      message: 'Logged out successfully' 
    });
  });
};

export const registerUser = async (req, res) => {
  const { username, email, password, retypePassword, first_name, last_name } = req.body;
  
  try {
    if (!username || !password || !email || !retypePassword || !first_name || !last_name) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (password !== retypePassword) {
      return res.status(400).json({ message: "Passwords do not match." });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists." });
    }

    const full_name = `${first_name || ''} ${last_name || ''}`.trim();

    await User.create({
      username,
      first_name,
      last_name,
      full_name: full_name,
      email,
      password,
    });

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Error during registration:", error.message);
    res.status(500).json({ message: "Server error.", error: error.message });
  }
};


export const checkUser = (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ authenticated: true });
  } else {
    res.json({ authenticated: false });
  }
};