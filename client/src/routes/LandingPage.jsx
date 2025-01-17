import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import ExploreRecipe from "@/pages/ExploreRecipe";
import Header from "@/layouts/Header";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ErrorLink from "@/pages/ErrorLink";
import Footer from "@/layouts/Footer";

function LandingPage() {
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
      <Footer />
    </div>
  );
}

export default LandingPage;
