import AuthModal from "@/components/auth-modal";
import { auth } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="">
      <div className="flex py-5 items-center justify-between bg-rose-100 px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={70} height={70} />
          <h4 className="text-3xl font-semibold">
            Alex<span className="text-primary">ander</span>
          </h4>
        </Link>
        <AuthModal />
      </div>
      <h1>Hello World</h1>
    </div>
  );
}
