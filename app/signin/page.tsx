import Footer from "@/components/footer";
import Header from "@/components/header";
import SigninButton from "@/components/signin-button";

export default async function page() {
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
