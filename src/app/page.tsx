import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import ClientLanding from "@/components/client-home"; // Client component for the interactive parts
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="">
      {/** Load the client-side landing page component */}
      <main className="flex-grow">
        <ClientLanding /> {/* Only rendered when not authenticated */}
      </main>

      {/** Footer */}
      <footer className="flex py-5 items-center justify-between px-8">
        <p className="font-semibold">
          &copy; {new Date().getFullYear()} Alexander. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Button variant="ghost" className="text-zinc-600">
            Terms of Service
          </Button>
          <Button variant="outline" className="text-zinc-600">
            Our Sponsors
          </Button>
        </div>
      </footer>
    </div>
  );
}
