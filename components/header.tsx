import Link from "next/link";
import {DollarSign} from "lucide-react";

import {Button} from "./ui/button";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
      <Link className="flex w-[40px] items-center justify-center" href="#">
        <DollarSign className="h-6 w-6" />
        <span className="sr-only">FinanceApp</span>
      </Link>

      <Link className="md:hidden" href="#">
        <h1>FinanceApp</h1>
      </Link>

      <MobileMenu />

      <nav className="ml-auto items-center gap-4 sm:gap-6 hidden md:flex">
        <Link className="text-md font-medium hover:underline underline-offset-4" href="#">
          Dashboard
        </Link>
        <Link className="text-md font-medium hover:underline underline-offset-4" href="#">
          Transactions
        </Link>
        <Link className="text-md font-medium hover:underline underline-offset-4" href="#">
          Budgeting
        </Link>
        <Link className="text-md font-medium hover:underline underline-offset-4" href="#">
          Reports
        </Link>
        <Link className="text-md font-medium hover:underline underline-offset-4" href="#">
          Login
        </Link>
        <Button asChild>
          <Link className="text-md font-medium" href="#">
            Sign Up
          </Link>
        </Button>
      </nav>
    </header>
  );
}
