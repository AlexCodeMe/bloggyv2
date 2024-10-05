import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function useAuth() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return session
}
