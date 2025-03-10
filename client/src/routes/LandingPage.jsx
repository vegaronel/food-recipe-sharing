import React from 'react';
import { Routes, Route } from 'react-router';
import Home from '@/pages/Home';
import ExploreRecipe from '@/pages/ExploreRecipe';
import About from '@/pages/About';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ErrorLink from '@/pages/ErrorLink';
import LandingPageLayout from '../layouts/LandingPageLayout';
import DashboardLayout from '@/layouts/DashboardLayout';
import ProtectedRoute from '@/context/ProtectedRoute';
import Dashboard from '@/pages/Dashboard';

function LandingPage() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPageLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<ExploreRecipe />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<ErrorLink />} />
        </Route>
        
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>

    </div>
  );
}

export default LandingPage;
