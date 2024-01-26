"use server";

import {desc, eq, sum} from "drizzle-orm";

import {db} from "@/db";
import {transactions as transactionsTable} from "@/db/schema/transactions";
import {categories} from "@/db/schema/categories";

export async function getLastTransactions(userId: string) {
  const transactions = await db
    .select({
      date: transactionsTable.date,
      description: transactionsTable.description,
      amount: transactionsTable.amount,
      categories: {
        category_name: categories.category_name,
        category_name_description: categories.description,
      },
    })
    .from(transactionsTable)
    .where(eq(transactionsTable.user_id, userId))
    .leftJoin(categories, eq(transactionsTable.category_id, categories.id))
    .orderBy(desc(transactionsTable.date))
    .limit(5);

  return transactions;
}

export async function getBalance(userId: string, typeCard: string) {
  switch (true) {
    case typeCard === "expenses":
      const balance = await db
        .select({
          balance: sum(transactionsTable.amount),
        })
        .from(transactionsTable)
        .where(eq(transactionsTable.user_id, userId));

      return {amount: balance[0].balance || "", typeBalance: "Expenses"};
  }
}
