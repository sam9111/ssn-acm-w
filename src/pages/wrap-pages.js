import React from "react";
import Layout from "../components/Layout.js";
import NotFoundPage from "./404.js";

export function wrapPages({ element }) {
  return <Layout>{element}</Layout>;
}

export default NotFoundPage