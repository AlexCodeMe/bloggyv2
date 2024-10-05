"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, PawPrint } from "lucide-react";
import MobileSidebar from "./mobile-sidebar"; // Import MobileNav
import { SignOutButton } from "@/components/submit-buttons";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-10 p-4 h-18">
      <div className="flex justify-between items-center">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-2">
          <PawPrint />
          <h4 className="ml-2 text-3xl font-semibold">
            Alex<span className="text-primary">ander</span>
          </h4>
        </Link>

        {/* Sign out button and mobile menu toggle */}
        <div className="flex items-center justify-center">
          {/* Hamburger menu button for mobile screens */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
          {/* Sign out button for all screen sizes */}
          <SignOutButton />
        </div>
      </div>

      {/* Mobile navigation drawer */}
      <MobileSidebar isOpen={isMobileOpen} setIsOpen={setIsMobileOpen} />
    </div>
  );
}
