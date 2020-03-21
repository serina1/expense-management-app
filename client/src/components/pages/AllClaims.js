import React, { useEffect, useState, useContext } from "react";
import Table from "../table/Table";
import API from "../../utils/API";
import AuthContext from "../AuthContext";

function AllClaims() {
  const [data, setData] = useState([]);

  const { userId } = useContext(AuthContext);

  useEffect(() => {
    API.getExpenses().then(res => {
      setData(res.data.filter(expense => expense.creator == userId));
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
        Header: " ",
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
            Header: " ",
            Cell: ({ row, ...other }) => (
              <div>
                <button
                  onClick={() => handleRemoveExpense(row.original._id, other)}
                >
                  x
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
    <div>
      <h2>All Expense Claims</h2>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default AllClaims;
