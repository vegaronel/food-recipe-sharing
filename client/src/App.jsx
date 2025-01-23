// App.js
import React from 'react';
import { Routes, Route } from 'react-router';
import "./App.css";
// LAYOUT
import LandingPageLayout from './layouts/LandingPageLayout';
import DashboardLayout from './layouts/DashboardLayout';

// PAGES
import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';
import ExploreRecipe from './components/pages/ExploreRecipe';
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
import About from './components/pages/About';

function App() {
  return (
      <Routes>
        {/* Public Routes */}
        <Route element={<LandingPageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/explore" element={<ExploreRecipe />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/about" element={<About />} />
          {/* Add more public routes here */}
        </Route>

        {/* Protected Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Add more dashboard routes here */}
        </Route>
      </Routes>
  );
}

export default App;
