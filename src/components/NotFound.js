import React from "react";
import { Link } from "react-router-dom";
import usePageTitle from "../usePageTitle";

function NotFound() {
  usePageTitle("Not found");

  return (
    <section>
      <h1>404</h1>
      <p>
        That page does not exist. <Link to="/">Back home</Link>.
      </p>
    </section>
  );
}

export default NotFound;
