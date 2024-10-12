"use client";

import React, { useState } from "react";
import {
  credentialsSignin,
  githubSignIn,
  googleSignIn,
} from "@/actions/auth-actions";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";

export default function AuthModal({ label }: { label: string }) {
  const [registering, setRegistering] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (registering) {
      handleCredentialsRegister(e);
    } else {
      handleCredentialsSignIn(e);
    }
  }

  async function handleCredentialsSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    await credentialsSignin({ email, password });

    console.log("Form submitted");
  }

  async function handleCredentialsRegister(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const username = (form.elements.namedItem("username") as HTMLInputElement)
      .value;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;


    console.log("Form submitted");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="">
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[420px]">
        <DialogHeader className="flex-row justify-center items-center gap-x-2">
          <Image src="/logo.png" width={70} height={70} alt="Logo" />
          <h4 className="text-3xl font-semibold">
            Alex<span className="text-primary">ander</span>
          </h4>
        </DialogHeader>
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Welcome to Bloggy
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Sign in to your account or create a new one
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="you@example.com" type="email" />
            </LabelInputContainer>

            {registering && (
              <>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="email">Username</Label>
                  <Input
                    id="email"
                    placeholder="you@example.com"
                    type="email"
                  />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="Jane Doe"
                    type="text"
                  />
                </LabelInputContainer>
              </>
            )}
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="••••••••" type="password" />
            </LabelInputContainer>
            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Sign in &rarr;
              <BottomGradient />
            </button>
          </form>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <div className="flex flex-col space-y-4">
            <form className="w-full" action={googleSignIn}>
              <button
                className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
              >
                <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Sign in with Google
                </span>
                <BottomGradient />
              </button>
            </form>

            <form className="w-full" action={githubSignIn}>
              <button
                className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
              >
                <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Sign in with GitHub
                </span>
                <BottomGradient />
              </button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
