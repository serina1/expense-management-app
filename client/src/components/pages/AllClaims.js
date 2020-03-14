import React, {useEffect, useState} from "react";
import Table from "../table/Table"
import ExpenseData from "../expenses/expenses.json";
import API from "../../utils/API"

function AllClaims() {

  const [data, setData ] = useState([])

  useEffect(() => {
    API.getExpenses()
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
  }, [])


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
            accessor: "delete"
          }

        ]
      }
    ],
    []
  );

  
  // const data = React.useMemo(() => ExpenseData, []);


  return (
      <Table columns={columns} data={data} />
  );
}

export default AllClaims;
