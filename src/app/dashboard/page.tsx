import { useAuth } from "@/hooks/useAuth";
import React from "react";

export default async function Dashboard() {
  const session = await useAuth();

  return (
    <div>
      Hello! This is the Dashboard
      <h1>
        Welcome, {session?.user?.name}{" "}
        <span className="text-sm text-gray-500">{session?.user?.email}</span>
      </h1>
    </div>
  );
}
