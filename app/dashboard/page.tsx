import {Button} from "@/components/ui/button";
import {auth, signIn, signOut} from "@/auth/auth";

export default async function page() {
  const session = await auth();

  return (
    <main>
      <>
        {session !== null ? (
          <form
            action={async () => {
              "use server";
              await signOut({redirectTo: "/"});
            }}
          >
            <Button>Log Out</Button>
          </form>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn();
            }}
          >
            <Button>Sign in</Button>
          </form>
        )}
      </>
    </main>
  );
}
