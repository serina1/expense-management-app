import React from "react";
import styled from "styled-components";
import { useTable } from "react-table";

const Styles = styled.div`
  padding: 1rem;
  table {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    margin: -15px;
    border-spacing: 0;
    border: solid 1px #dddddd;
    border-collapse: collapse;
    width: 900px;
    tr {
      :nth-child(even){background-color: #f2f2f2;}
      :last-child {
        td {
          border-bottom: 0;
        }
      }
      :hover {
        background-color: #ddd;
      }
    }
      border: 1px solid #ddd;
    }
    th {
      padding: 0.1rem 0.5rem 0.5rem 0.5rem;
      text-align: left;
      background-color: #9777ad;
      color: white;
    }
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: solid 1px #dddddd;
      border-top: solid 1px #dddddd;
      :last-child {
        border-right: 0;
      }
    }
  }
  .--is-filtering {
    opacity: 0;
    transition: 10s;
  }
  button {
    border: solid 1px #9777ad;
    border-radius: 50%;
    background: none;
    color: #9777ad;
  }
`;

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  // Render the UI for your table
  return (
    <Styles>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Styles>
  );
}

export default Table;
