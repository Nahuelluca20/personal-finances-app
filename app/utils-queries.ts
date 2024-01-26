"use server";

import {eq} from "drizzle-orm";

import {db} from "@/db";
import {users} from "@/db/schema/users";

export async function getUserId(email: string) {
  return await db.select({id: users.id}).from(users).where(eq(users.email, email));
}
