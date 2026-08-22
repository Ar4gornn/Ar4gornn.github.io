import React from "react";

function Portfolio() {
  return (
    <div style={{ margin: "2rem" }}>
      <h1>My Portfolio</h1>
      <p>This is the main page of my portfolio. Check out my projects below:</p>
      <ul>
        <li>
          <a href="/shortener">URL Shortener</a>
        </li>
        {/* Add more projects as you wish */}
      </ul>
    </div>
  );
}

export default Portfolio;
