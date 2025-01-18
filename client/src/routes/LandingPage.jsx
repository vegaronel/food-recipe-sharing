import React from "react";
import { Routes, Route, useLocation } from "react-router";
import Home from "../components/pages/Home";
import ExploreRecipe from "@/components/pages/ExploreRecipe";
import Header from "@/layouts/Header";
import About from "@/components/pages/About";
import Login from "@/components/pages/Login";
import Register from "@/components/pages/Register";
import ErrorLink from "@/components/pages/ErrorLink";
import Footer from "@/layouts/Footer";

function LandingPage() {
  const location = useLocation();
  const hideFooterRoutes = ["/login", "/register"];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow w-full m-auto py-6 mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<ExploreRecipe />} />
          <Route path="/about" element={<About />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorLink />} />
        </Routes>
      </div>
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default LandingPage;
