import React, { useState, useEffect } from "react";
import { Input, FormBtn } from "../form";
import API from "../../utils/API";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
      notes: formObject.notes
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
        window.location.replace("/allclaims");
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <p />
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <h2>Create an expense claim</h2>
            <p />
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
                value={formObject.title}
              />
              {/* <Input
                onChange={handleInputChange}
                name="date"
                placeholder="Date (required)"
                value={formObject.date}
              /> */}
              <DatePicker
                onChange={handleDateChange}
                selected={formObject.date}
                placeholder="Date (required)"
              />
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
