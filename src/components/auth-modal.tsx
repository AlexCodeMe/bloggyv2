import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import Image from "next/image";
import { signIn } from "@/lib/auth";
import { GithubAuthButton, GoogleAuthButton } from "./submit-buttons";

export default function AuthModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Try for Free</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[360px]">
        <DialogHeader className="flex-row justify-center items-center gap-x-2">
          <Image src="/logo.png" width={70} height={70} alt="Logo" />
          <h4 className="text-3xl font-semibold">
            Alex<span className="text-primary">ander</span>
          </h4>
        </DialogHeader>
        <div className="flex flex-col gap-3 mt-5">
          <form
            className="w-full"
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <GoogleAuthButton />
          </form>

          <form
            className="w-full"
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <GithubAuthButton />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
