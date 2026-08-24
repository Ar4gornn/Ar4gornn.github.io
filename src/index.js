import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Shortener from "./components/Shortener";
import InventoryDemo from "./components/InventoryDemo";
import SongPartyDemo from "./components/SongPartyDemo";
import NotFound from "./components/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />

          {/* One route per playable demo. */}
          <Route path="/demos/url-shortener" element={<Shortener />} />
          <Route path="/demos/inventory" element={<InventoryDemo />} />
          <Route path="/demos/songparty" element={<SongPartyDemo />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
