import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Shortener from "./components/Shortener";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {/* MAIN/HOME route */}
      <Route path="/" element={<Portfolio />} />

      {/* The shortener route */}
      <Route path="/shortener" element={<Shortener />} />
    </Routes>
  </BrowserRouter>
);
