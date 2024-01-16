import {Button} from "@/components/ui/button";
import {signIn} from "@/auth/auth";

export default function page() {
  return (
    <main>
      <form
        action={async () => {
          "use server";
          await signIn();
        }}
      >
        <Button>Sign in</Button>
      </form>
    </main>
  );
}
