import React from "react";
import Layout from "../components/Layout.js";

export function wrapPages({ element }) {
  return <Layout>{element}</Layout>;
}
