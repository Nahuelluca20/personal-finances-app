import {getLoggedInUserId} from "@/utils/getLoggedInUserId";

import {getBalance} from "../queries";

import InfoCard from "./info-card";

// let cardsInfo = [
//   {
//     description: "Total Balance",
//     title: "12,589.00",
//   },
//   {
//     description: "Income",
//     title: "8,450.00",
//   },
//   {
//     description: "Expenses",
//     title: "4,200.00",
//   },
//   {
//     description: "Savings",
//     title: "$3,939.00",
//   },
// ];

interface IBalances {
  amount: string;
  typeBalance: string;
}

export default async function CardContainer() {
  const userId = await getLoggedInUserId();
  let cardsInfo = [] as IBalances[];

  let sumExpenses: IBalances | undefined;

  if (userId) {
    const result = await getBalance(userId[0]?.id, "expenses");

    // Verificar si result no es undefined antes de asignar a sum
    if (result !== undefined) {
      sumExpenses = {
        amount: result.amount || "", // Asignar un valor predeterminado en caso de ser undefined
        typeBalance: result.typeBalance,
      };
    }
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
      {cardsInfo.map((card) => (
        <InfoCard
          key={`cardinfo-${card.typeBalance}`}
          description={card.typeBalance}
          title={card.amount}
        />
      ))}
    </div>
  );
}
