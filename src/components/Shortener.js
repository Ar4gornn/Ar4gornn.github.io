import React, { useState } from "react";

function Shortener() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setShortUrl("");
  
    if (!originalUrl) {
      setError("Please enter a URL.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5251/api/urls", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ originalUrl }),
      });
  
      if (!response.ok) {
        const msg = await response.text();
        setError(`Error: ${msg}`);
        return;
      }
  
      const data = await response.json();
  
      // ✅ Ensure we correctly access the returned short URL
      if (data.fullShortUrl) {
        setShortUrl(data.fullShortUrl);
      } else {
        setError("Unexpected response format.");
      }
    } catch (err) {
      console.error("Fetch error:", err.message);
      setError("Network error. Please check your server connection.");
    }
  };
  

  return (
    <div style={{ margin: "2rem" }}>
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="urlInput">Enter a long URL:</label>
        <br />
        <input
          id="urlInput"
          type="text"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          style={{ width: "400px" }}
        />
        <br />
        <br />
        <button type="submit">Shorten URL</button>
      </form>

      {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}

      {shortUrl && (
        <div style={{ marginTop: "1rem" }}>
          <p>
            Shortened URL:{" "}
            <a href={shortUrl} target="_blank" rel="noreferrer">
              {shortUrl}
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Shortener;
