import {redirect} from "next/navigation";

import {auth} from "@/auth/auth";
import Footer from "@/components/footer";
import Header from "@/components/header";
import SigninButton from "@/components/signin-button";

export default async function page() {
  const session = await auth();

  if (session) {
    return redirect("/me/dashboard");
  }

  return (
    <>
      <Header />
      <div className="w-full py-24 text-center">
        <SigninButton />
      </div>
      <Footer />
    </>
  );
}
