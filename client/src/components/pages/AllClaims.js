import React, { useEffect, useState } from "react";
import Table from "../table/Table";
import API from "../../utils/API";
import { AuthContext } from "../../App";


function AllClaims() {
  const { state: authState } = React.useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    API.getExpenses().then(res => {
      setData(res.data);
    });
  }, []);

  function handleRemoveExpense(id, other) {
    API.removeExpense(id).then(
      setData(other.data.filter(expense => expense._id !== id))
    );
  }
  
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
                <button
                  onClick={() => handleRemoveExpense(row.original._id, other)}
                >
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

  return (
    <Table columns={columns} data={data} />
  );
}

export default AllClaims;
