import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="shell">
      <header className="site-header">
        <Link to="/" className="brand">
          Alex Ghanem
        </Link>
        <nav aria-label="Main">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <a href="https://github.com/Ar4gornn" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Alex Ghanem</span>
        <a href="https://github.com/Ar4gornn" target="_blank" rel="noreferrer">
          github.com/Ar4gornn
        </a>
      </footer>
    </div>
  );
}

export default Layout;
