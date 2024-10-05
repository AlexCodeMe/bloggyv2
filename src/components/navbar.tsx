import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex py-5 items-center justify-between">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={120} height={120} />
      </Link>
    </div>
  );
}
