import React, { useState } from "react";
import PageCard from "../account/PageCard"

function Account(props) {
console.log(props)

const [name, setName] = useState();

  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>
        Welcome to Expense Management App! Please select one of the options below...
      </p>
      <PageCard />
    </div>
  );
}

export default Account;