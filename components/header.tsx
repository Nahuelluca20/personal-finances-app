import Link from "next/link";
import {DollarSign} from "lucide-react";

import {Button} from "./ui/button";
import MobileMenu from "./mobile-menu";
import SigninButton from "./signin-button";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Transactions",
    href: "/transactions",
  },
  {
    name: "Budgeting",
    href: "/budgeting",
  },
  {
    name: "Reports",
    href: "/reports",
  },
];

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
      <Link className="flex w-[40px] items-center justify-center" href="/">
        <DollarSign className="h-6 w-6" />
        <span className="sr-only">FinanceApp</span>
      </Link>

      <Link className="md:hidden" href="/">
        <h1 className="text-xl font-bold">FinanceApp</h1>
      </Link>

      <MobileMenu links={links}>
        <SigninButton />
      </MobileMenu>

      <nav className="ml-auto items-center gap-4 sm:gap-6 hidden md:flex">
        {links.map((link) => (
          <Link
            key={link.name}
            className="text-sm font-medium hover:underline underline-offset-4"
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
        <Button asChild>
          <Link className="text-sm font-medium" href="/signin">
            Sign In
          </Link>
        </Button>
      </nav>
    </header>
  );
}
