import {TableHeader, TableRow, TableHead, TableBody, TableCell, Table} from "@/components/ui/table";

export default function TableInfo({
  labelId,
  tableTitle,
  tableHeaders,
  tableRowsData,
}: {
  labelId?: string;
  tableTitle: string;
  tableHeaders: string[];
  tableRowsData: string[][];
}) {
  return (
    <>
      <h2 className="font-semibold text-lg md:text-xl" id={labelId || "table-info"}>
        {tableTitle}
      </h2>
      <div className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              {tableHeaders.map((header) => (
                <TableHead key={`${labelId}-${header}`}>{header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableRowsData.map((row) => (
              <TableRow key={`${labelId}-${row[0]}`}>
                {row.map((cell) => (
                  <TableCell key={`${labelId}-${cell}`}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
