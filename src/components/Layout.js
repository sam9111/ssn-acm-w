import React from "react";
import Header from "../components/Header.js";


export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
