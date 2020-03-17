import React, { useEffect, useState } from "react";
import Table from "../table/Table";
import ExpenseData from "../expenses/expenses.json";
import API from "../../utils/API";

function AllClaims() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.getExpenses().then(res => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  function handleRemoveExpense(id, other) {
    console.log(id);
    console.log(other.data);
    setData(other.data.filter(expense => expense._id !== id));
    API.removeExpense(id);
  }
  
  console.log(data);
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
          },
          {
            Header: "Delete-icon",
            Cell: ({ row, ...other }) => (
              <div>
                <button onClick={() => handleRemoveExpense(row.original._id, other)}>
                  Delete
                </button>
              </div>
            )
          }
        ]
      }
    ],
    []
  );

  // const data = React.useMemo(() => ExpenseData, []);

  return (
    // pass in handleRemove
    <Table columns={columns} data={data} />
  );
}

export default AllClaims;
