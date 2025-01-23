import React from "react";
import { Routes, Route } from "react-router";
import Home from "../components/pages/Home";
import ExploreRecipe from "@/components/pages/ExploreRecipe";
import About from "@/components/pages/About";
import Login from "@/components/pages/Login";
import Register from "@/components/pages/Register";
import ErrorLink from "@/components/pages/ErrorLink";
import LandingPageLayout from "../layouts/LandingPageLayout"

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
