import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="px-4 md:px-20">
        <Navbar />
      </div>

      {/* Main content */}
      <main className="container mx-auto px-4 md:py-20">
        <Outlet />
      </main>

      {/* Footer */}
      <div className="px-4 md:px-20">
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
