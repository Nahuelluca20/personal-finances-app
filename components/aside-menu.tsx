import Link from "next/link";
import {
  BellIcon,
  DollarSignIcon,
  HomeIcon,
  LineChartIcon,
  Package2,
  PieChartIcon,
} from "lucide-react";

import {Button} from "./ui/button";

const links = [
  {
    name: "Home",
    href: "home",
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    name: "Dashboard",
    href: "dashboard",
    icon: <LineChartIcon className="h-4 w-4" />,
  },
  // {
  //   name: "Transactions",
  //   href: "#",
  //   icon: CreditCardIcon,
  // },
  {
    name: "Budget",
    href: "budget",
    icon: <DollarSignIcon className="h-4 w-4" />,
  },
  {
    name: "Categories",
    href: "categories",
    icon: <PieChartIcon className="h-4 w-4" />,
  },
];

export default function AsideMenu() {
  return (
    <aside className="w-full max-w-[280px] hidden border-r h-full bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div className="flex h-full min-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <Package2 className="h-6 w-6" />
            <span className="">Finance Tracker</span>
          </Link>
          <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
            <BellIcon className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.name}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href={link.href}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}
