import InfoCard from "@/app/me/dashboard/components/info-card";

import TableInfo from "./components/table-info";

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

let tableHeadersFinancialInfo = ["Date", "Description", "Amount"];

let tableFinancialInfo = [
  ["Jan 1, 2024", "Groceries", "$100.00"],
  ["Jan 2, 2024", "Rent", "$1000.00"],
  ["Jan 3, 2024", "Movie Tickets	", "$30.00"],
];

export default function page() {
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
        <TableInfo
          labelId="transaction-history-heading"
          tableHeaders={tableHeadersFinancialInfo}
          tableRowsData={tableFinancialInfo}
          tableTitle="Transaction History"
        />
      </section>

      {/* <section aria-labelledby="financial-goals-heading" className="space-y-2">
        <h2 className="font-semibold text-lg md:text-xl" id="financial-goals-heading">
          Financial Goals
        </h2>
        <div className="border shadow-sm rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Goal</TableHead>
                <TableHead>Target Amount</TableHead>
                <TableHead>Current Amount</TableHead>
                <TableHead>Progress</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Emergency Fund</TableCell>
                <TableCell>$5000.00</TableCell>
                <TableCell>$2000.00</TableCell>
                <TableCell>
                  <div className="w-full h-2 rounded-md bg-gray-200" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Vacation</TableCell>
                <TableCell>$2000.00</TableCell>
                <TableCell>$500.00</TableCell>
                <TableCell>
                  <div className="w-full h-2 rounded-md bg-gray-200" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section> */}
    </div>
  );
}
