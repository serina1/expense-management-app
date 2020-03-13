import React from "react";
import Table from "../table/Table"
import ExpenseData from "../expenses/expenses.json";

function AllClaims() {
  const columns = React.useMemo(
    () => [
      {
        Header: "All Expense Claims",
        columns: [
          {
            Header: "Title",
            accessor: "title"
          },
          {
            Header: "Date",
            accessor: "date"
          },
          {
            Header: "Category",
            accessor: "category"
          },
          {
            Header: "Client to charge",
            accessor: "clienttocharge"
          },
          {
            Header: "Amount",
            accessor: "amount"
          },
          {
            Header: "Notes",
            accessor: "notes"
          }
        ]
      }
    ],
    []
  );

  const data = React.useMemo(() => ExpenseData, []);

  return (
      <Table columns={columns} data={data} />
  );
}

export default AllClaims;
