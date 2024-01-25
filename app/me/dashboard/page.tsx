import InfoCard from "@/components/info-card";
import {TableHeader, TableRow, TableHead, TableBody, TableCell, Table} from "@/components/ui/table";

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
        <h2 className="font-semibold text-lg md:text-xl" id="transaction-history-heading">
          Transaction History
        </h2>
        <div className="border shadow-sm rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Jan 1, 2024</TableCell>
                <TableCell>Groceries</TableCell>
                <TableCell>$100.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jan 2, 2024</TableCell>
                <TableCell>Rent</TableCell>
                <TableCell>$1000.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jan 3, 2024</TableCell>
                <TableCell>Movie Tickets</TableCell>
                <TableCell>$30.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      <section aria-labelledby="financial-goals-heading" className="space-y-2">
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
      </section>
    </div>
  );
}
