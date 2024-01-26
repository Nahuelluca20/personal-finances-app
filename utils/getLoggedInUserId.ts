import {auth} from "@/auth/auth";
import {getUserId} from "@/app/utils-queries";

export async function getLoggedInUserId() {
  const session = await auth();

  return session?.user?.email && (await getUserId(session?.user?.email));
}
