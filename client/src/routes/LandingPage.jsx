import React from 'react';
import { Routes, Route } from 'react-router';
import Home from '../pages/Home';
import ExploreRecipe from '@/pages/ExploreRecipe';
import About from '@/pages/About';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ErrorLink from '@/pages/ErrorLink';
import LandingPageLayout from '../layouts/LandingPageLayout';

function LandingPage() {
  return (
    <div>
      <LandingPageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<ExploreRecipe />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorLink />} />
        </Routes>
      </LandingPageLayout>
    </div>
  );
}

export default LandingPage;
