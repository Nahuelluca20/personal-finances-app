"use client";
import {Menu} from "lucide-react";
import Link from "next/link";
import {useState} from "react";

import {cn} from "@/lib/utils";

import {Button} from "./ui/button";

export default function MobileMenu({links}: {links: {name: string; href: string}[]}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:hidden">
      <Button
        className="p-2 transition duration-200 rounded focus:outline-none focus:shadow-outline"
        size="icon"
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu />
      </Button>
      <div
        className={cn(
          "absolute right-4 mt-2 w-48 bg-white border border-gray-200 rounded shadow-xl",
          {
            hidden: !isOpen,
          },
        )}
      >
        {links.map((link) => (
          <Link
            key={link.name}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
        <Button asChild>
          <Link className="m-2" href="/signin">
            Sign In
          </Link>
        </Button>
      </div>
    </nav>
  );
}
