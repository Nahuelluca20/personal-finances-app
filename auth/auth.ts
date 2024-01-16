import NextAuth from "next-auth";
import {DrizzleAdapter} from "@auth/drizzle-adapter";
import Google from "next-auth/providers/google";

import {db} from "@/db";

export const {handlers, auth, signIn} = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  adapter: DrizzleAdapter(db),
});
