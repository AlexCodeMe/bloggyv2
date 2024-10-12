import React from "react";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";
import { useAuth } from "@/hooks/useAuth";
import { getUserById } from "@/actions/user-actions";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await useAuth();

  const user = await getUserById(session?.user?.id as string);
  if (!user) {
    return <div>User not found</div>;
  }

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
        <div className="flex-grow p-6">{children}</div>
      </div>
    </div>
  );
}
