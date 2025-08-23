import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="container mx-auto py-1 px-20">
      <Navbar />
      <main className="pt-25">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default MainLayout;
