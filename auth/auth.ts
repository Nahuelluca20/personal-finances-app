import NextAuth, {NextAuthConfig} from "next-auth";
import {DrizzleAdapter} from "@auth/drizzle-adapter";
import Google from "next-auth/providers/google";

import {db} from "@/db";

export const authConfig = {
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
  cookies: {
    csrfToken: {
      name: "next-auth.csrf-token",
      options: {
        httpOnly: true,
        sameSite: "none",
        path: "/",
        secure: true,
      },
    },
    pkceCodeVerifier: {
      name: "next-auth.pkce.code_verifier",
      options: {
        httpOnly: true,
        sameSite: "none",
        path: "/",
        secure: true,
      },
    },
  },
  adapter: DrizzleAdapter(db),
  callbacks: {
    async session({session, user}) {
      session?.user?.id === user.id;

      return session;
    },
    authorized({auth, request: {nextUrl}}) {
      const isLoggedIn = !!auth?.user;
      const path = ["/dashboard", "/transactions", "/budgeting", "/reports"];
      const isProtected = path.some((path) => nextUrl.pathname.startsWith(path));

      if (isProtected && !isLoggedIn) {
        const redirectUrl = new URL("/signin", nextUrl.origin);

        // redirectUrl.searchParams.append("callbackUrl", nextUrl.href);

        return Response.redirect(redirectUrl);
      }

      return true;
    },
  },
} satisfies NextAuthConfig;

export const {handlers, auth, signIn, signOut} = NextAuth(authConfig);
