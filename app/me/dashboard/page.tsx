import {getLoggedInUserId} from "@/utils/getLoggedInUserId";

import TableInfo from "./components/table-info";
import {getLastTransactions} from "./queries";
import CardContainer from "./components/card-container";

export default async function page() {
  const userId = await getLoggedInUserId();

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
      <CardContainer />

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
