import React from "react";
import { BrowserRouter } from "react-router";
import LandingPage from "./routes/LandingPage";
import "./App.css"
import "../src/index.css";
function App() {
  return (
    <div>
     <BrowserRouter>
        <LandingPage />
     </BrowserRouter>
    </div>
  );
}

export default App;
