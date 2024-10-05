import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SignOutButton } from "./submit-buttons";

export default function Navbar() {
  return (
    <div className="flex py-5 items-center justify-between bg-rose-100 px-8">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="logo" width={70} height={70} />
        <h4 className="text-3xl font-semibold">
          Alex<span className="text-primary">ander</span>
        </h4>
      </Link>
      <SignOutButton />
    </div>
  );
}
