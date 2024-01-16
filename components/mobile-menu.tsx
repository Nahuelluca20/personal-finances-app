"use client";
import {Menu} from "lucide-react";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";

import {cn} from "@/lib/utils";

import {Button} from "./ui/button";

export default function MobileMenu({
  links,
  children,
}: {
  links: {name: string; href: string}[];
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

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
        ref={menuRef}
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
        <div className="m-2">{children}</div>
      </div>
    </nav>
  );
}
