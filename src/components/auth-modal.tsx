import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import Image from "next/image";
import { GithubAuthButton, GoogleAuthButton } from "./submit-buttons";
import { githubSignIn, googleSignIn } from "@/actions/auth-actions";

export default function AuthModal({ label }: { label: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className=''>{label}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[360px]">
        <DialogHeader className="flex-row justify-center items-center gap-x-2">
          <Image src="/logo.png" width={70} height={70} alt="Logo" />
          <h4 className="text-3xl font-semibold">
            Alex<span className="text-primary">ander</span>
          </h4>
        </DialogHeader>
        <div className="flex flex-col gap-3 mt-5">
          <form className="w-full" action={googleSignIn}>
            <GoogleAuthButton />
          </form>

          <form className="w-full" action={githubSignIn}>
            <GithubAuthButton />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
