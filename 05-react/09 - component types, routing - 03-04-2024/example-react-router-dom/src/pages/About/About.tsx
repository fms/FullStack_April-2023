import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();

  return (
    <>
      <div>About</div>
      <div>Data: {location.state?.data ?? "No Data provided"}</div>
      <div>URL: {location.pathname}</div>
      <Link to="/">Go Home</Link>
    </>
  );
}
