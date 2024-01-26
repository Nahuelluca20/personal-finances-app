import InfoCard from "@/app/me/dashboard/components/info-card";
import {auth} from "@/auth/auth";
import {getUserId} from "@/app/utils-queries";

import TableInfo from "./components/table-info";
import {getLastTransactions} from "./queries";

let cardsInfo = [
  {
    description: "Total Balance",
    title: "12,589.00",
  },
  {
    description: "Income",
    title: "8,450.00",
  },
  {
    description: "Total Balance",
    title: "4,200.00",
  },
  {
    description: "Total Balance",
    title: "$3,939.00",
  },
];

export default async function page() {
  const session = await auth();

  const userId = session?.user?.email && (await getUserId(session?.user?.email));

  const dataTransactions = userId && (await getLastTransactions(userId[0].id));

  const serializedData =
    dataTransactions &&
    dataTransactions.map((item) => ({
      date: item.date,
      description: item.description,
      amount: item.amount,
      category_name: item.categories?.category_name || "",
      category_description: item.categories?.category_name_description || "",
    }));

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cardsInfo.map((card) => (
          <InfoCard
            key={`cardinfo-${card.title}`}
            description={card.description}
            title={card.title}
          />
        ))}
      </div>

      <section aria-labelledby="transaction-history-heading" className="space-y-2" role="region">
        {serializedData && (
          <TableInfo
            labelId="transaction-history-heading"
            tableHeaders={[
              "Date",
              "Description",
              "Amount",
              "Category Name",
              "Category Description",
            ]}
            tableRowsData={serializedData.map((item) => [
              item.date,
              item.description,
              item.amount,
              item.category_name,
              item.category_description,
            ])}
            tableTitle="Transaction History"
          />
        )}
      </section>
    </div>
  );
}
