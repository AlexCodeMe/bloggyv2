"use server";

import { signIn } from "@/lib/auth";

export async function googleSignIn() {
  await signIn("google");
}
export async function githubSignIn() {
  await signIn("github");
}

export async function signUp(username: string, password: string) {
  await signIn("credentials", {
    redirect: false, // Handle redirection manually if necessary
    username,
    password,
  });
}

export async function credentialsSignIn(username: string, password: string) {
  const result = await signIn("credentials", {
    redirect: false, // Handle redirection manually if necessary
    username,
    password,
  });

  if (result?.error) {
    console.error("Login error:", result.error);
  } else {
    console.log("Login successful");
  }
}


