import React, { useState } from "react";
import DemoFrame from "./DemoFrame";

const API = "http://localhost:5251/api/urls";

function Shortener() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setShortUrl("");

    if (!originalUrl.trim()) {
      setError("Enter a URL first.");
      return;
    }

    setBusy(true);
    try {
      const response = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ originalUrl }),
      });

      if (!response.ok) {
        setError(`The API returned ${response.status}: ${await response.text()}`);
        return;
      }

      const data = await response.json();
      if (data.fullShortUrl) {
        setShortUrl(data.fullShortUrl);
      } else {
        setError("The API responded, but not in the shape this page expects.");
      }
    } catch (err) {
      setError(
        "Could not reach the API. It runs locally on port 5251 — see the note above."
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <DemoFrame
      title="URL Shortener"
      requires={
        "This demo talks to UrlShortenerAPI on http://localhost:5251, so it only works when you " +
        "are running that project yourself. On the deployed site the request will fail, and it " +
        "says so rather than pretending otherwise."
      }
    >
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="urlInput">Long URL</label>
        <input
          id="urlInput"
          type="url"
          placeholder="https://example.com/a/very/long/path"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
        <button type="submit" disabled={busy}>
          {busy ? "Shortening…" : "Shorten"}
        </button>
      </form>

      {error && (
        <p className="error" role="alert">
          {error}
        </p>
      )}

      {shortUrl && (
        <p className="result">
          <a href={shortUrl} target="_blank" rel="noreferrer">
            {shortUrl}
          </a>
        </p>
      )}
    </DemoFrame>
  );
}

export default Shortener;
