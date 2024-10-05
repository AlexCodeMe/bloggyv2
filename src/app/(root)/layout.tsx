import React from "react";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar: fixed at the top */}
      <div className="fixed top-0 left-0 right-0 z-10">
        <Navbar />
      </div>

      {/* Main content container */}
      <div className="flex flex-grow pt-20">
        {/* Sidebar on medium+ screens */}
        <div className="hidden md:block w-64">
          <div className="sticky top-20 h-screen">
            <Sidebar />
          </div>
        </div>

        {/* Main content */}
        <div className="flex-grow p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
