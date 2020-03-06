import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Input, FormBtn } from "../form";
import API from "../../utils/API";

function Signup() {
  // Setting our component's initial state
  const [formObject, setFormObject] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, use the API.saveUser method to save the user data
  // Then redirect the user to the account page
  function handleFormSubmit(event) {
    event.preventDefault();
    if (
      formObject.firstname &&
      formObject.lastname &&
      formObject.email &&
      formObject.password
    ) {
      API.saveUser({
        firstname: formObject.firstname,
        lastname: formObject.lastname,
        email: formObject.email,
        password: formObject.password
      })
        .then(() =>
          setFormObject({
            firstname: "",
            lastname: "",
            email: "",
            password: ""
          })
        )
        .then(() => {
          window.location.replace("/account");
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <div>
      <p />
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <h2>Sign Up Form</h2>
            <p />
            <form>
              <Input
                onChange={handleInputChange}
                name="firstname"
                placeholder="First name (required)"
                value={formObject.firstName}
              />
              <Input
                onChange={handleInputChange}
                name="lastname"
                placeholder="Last name (required)"
                value={formObject.lastName}
              />
              <Input
                onChange={handleInputChange}
                name="email"
                placeholder="Email (required)"
                value={formObject.email}
              />
              <Input
                onChange={handleInputChange}
                name="password"
                placeholder="Password (required)"
                value={formObject.password}
              />
              <FormBtn
                disabled={
                  !(
                    formObject.firstname ||
                    formObject.lastname ||
                    formObject.email ||
                    formObject.password
                  )
                }
                onClick={handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
            <br />
            <p>
              Or log in <Link to="/login">here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
