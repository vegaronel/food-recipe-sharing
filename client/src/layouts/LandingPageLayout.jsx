import React from 'react';
import Header from './Header';
import { useLocation } from 'react-router';
import Footer from './Footer';
import { Outlet } from 'react-router';

function LandingPageLayout() {
  const location = useLocation();
  const hideFooterRoutes = ['/login', '/signup'];

  return (
    <div>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow w-full m-auto py-6 mt-4">
          <Header />
          <div className="main">
            <Outlet />
          </div>
          {!hideFooterRoutes.includes(location.pathname) && <Footer />}
        </div>
      </div>
    </div>
  );
}

export default LandingPageLayout;
