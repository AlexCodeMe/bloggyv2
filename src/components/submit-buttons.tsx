"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { signOut } from "next-auth/react";

export function GoogleAuthButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className="w-full">
          <Loader2 className="my-2 size-4 animate-spin" />
          Please wait.
        </Button>
      ) : (
        <Button disabled={pending} variant="outline" className="w-full">
          <Image
            src="/google.svg"
            alt="google"
            width={20}
            height={20}
            className="mr-2"
          />
          Sign in with Google
        </Button>
      )}
    </>
  );
}

export function GithubAuthButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled variant="outline" className="w-full">
          <Loader2 className="my-2 size-4 animate-spin" />
          Please wait.
        </Button>
      ) : (
        <Button disabled={pending} variant="outline" className="w-full">
          <Image
            src="/github.svg"
            alt="google"
            width={20}
            height={20}
            className="mr-2"
          />
          Sign in with GitHub
        </Button>
      )}
    </>
  );
}

export function SignOutButton() {
  const handleSignOut = async () => {
    try {
      localStorage.clear();
      await signOut({ callbackUrl: "/" });
    } catch (error) {
      console.error("Error during sign out:", error);
    }
  };

  return (
    <Button variant="ghost" className="" onClick={handleSignOut}>
      Sign out
    </Button>
  );
}
