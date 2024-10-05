import { useAuth } from "@/hooks/useAuth";
import React from "react";

export default async function Dashboard() {
  const session = await useAuth();

  return <div>Hello! This is the Dashboard</div>;
}
 