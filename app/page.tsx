import {CreditCard, FileText, PieChart} from "lucide-react";
import Link from "next/link";
import {redirect} from "next/navigation";

import SigninButton from "@/components/signin-button";
import {auth} from "@/auth/auth";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default async function Home() {
  const session = await auth();

  if (session) {
    return redirect("/me/home");
  }

  return (
    <>
      <Header />

      <main>
        <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Take Control of Your Finances
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  FinanceApp helps you track your transactions, plan your budget, and generate
                  financial reports. Start your journey to financial freedom today.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <SigninButton />
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#info"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="info">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <CreditCard className="h-12 w-12 mx-auto" />
                <h3 className="text-xl font-bold text-center">Track Transactions</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Keep track of your income and expenses with ease. Never lose sight of where your
                  money is going.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <PieChart className="h-12 w-12 mx-auto" />
                <h3 className="text-xl font-bold text-center">Plan Your Budget</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Create custom budgets and monitor your spending. Stay on track with your financial
                  goals.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <FileText className="h-12 w-12 mx-auto" />
                <h3 className="text-xl font-bold text-center">Generate Reports</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Generate detailed financial reports. Understand your financial health at a glance.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-200 dark:bg-gray-700">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-2xl font-bold text-center sm:text-3xl xl:text-4xl/none">
                Sign Up for Free
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400 text-center mx-auto">
                Get started with FinanceApp for free. No credit card required.
              </p>
              <div className="flex justify-center">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="/signin"
                >
                  Sign Up for Free
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
