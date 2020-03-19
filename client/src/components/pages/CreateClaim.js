import React, { useState, useContext } from "react";
import { Input, FormBtn } from "../form";
import API from "../../utils/API";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AuthContext from "../AuthContext";
import { useHistory } from "react-router-dom";

function CreateClaim() {
  // Setting our component's initial state
  const [formObject, setFormObject] = useState({
    title: "",
    date: "",
    category: "",
    clienttocharge: "",
    amount: "",
    notes: ""
  });

  function handleDateChange(date) {
    //console.log(event)
    setFormObject({ ...formObject, date });
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  const {userId} = useContext(AuthContext)
  let history = useHistory();

  // When the form is submitted, use the API.saveUser method to save the user data
  // Then redirect the user to the account page
  function handleFormSubmit(event) {
    event.preventDefault();

    API.createExpense({
      title: formObject.title,
      date: formObject.date,
      category: formObject.category,
      clienttocharge: formObject.clienttocharge,
      amount: formObject.amount,
      notes: formObject.notes,
      creator: userId
    })
      .then(() =>
        setFormObject({
          title: "",
          date: "",
          category: "",
          clienttocharge: "",
          amount: "",
          notes: ""
        })
      )
      .then(() => {
        history.push("/account");
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <p />
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2>Create an expense claim</h2>
            <p />
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
                value={formObject.title}
              />
              <div className="datepicker-wrapper">
                <DatePicker
                  className="datepicker"
                  onChange={handleDateChange}
                  name="date"
                  placeholderText="Date (required)"
                  selected={formObject.date}
                  autoComplete="off"
                />
              </div>
              <Input
                onChange={handleInputChange}
                name="category"
                placeholder="Category (required)"
                value={formObject.category}
              />
              <Input
                onChange={handleInputChange}
                name="clienttocharge"
                placeholder="Client to charge (required)"
                value={formObject.clienttocharge}
              />
              <Input
                onChange={handleInputChange}
                name="amount"
                placeholder="Amount (required)"
                value={formObject.amount}
              />
              <Input
                onChange={handleInputChange}
                name="notes"
                placeholder="Notes"
                value={formObject.notes}
              />
              <FormBtn onClick={e => handleFormSubmit(e)}>Submit</FormBtn>
            </form>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateClaim;
