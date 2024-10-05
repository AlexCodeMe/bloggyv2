"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { navItems } from "@/lib/constants";
import NavItem from "./nav-item";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="w-64 h-[calc(100vh-4rem)] sticky top-16 bg-background border-r flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-primary mb-4">Bloggy</h1>
        <form onSubmit={handleSearch} className="mb-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer" />
            <Input
              type="search"
              placeholder="Search posts..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>
      </div>

      <nav className="space-y-8 p-4 flex-grow">
        <div className="space-y-4">
          {navItems.map((item) => (
            <NavItem key={item.href} href={item.href} icon={item.icon}>
              {item.label}
            </NavItem>
          ))}
        </div>

        <div className="p-4 border-t">
          <Button className="w-full" onClick={() => router.push("/write")}>
            New Post
          </Button>
        </div>
      </nav>
    </div>
  );
}
