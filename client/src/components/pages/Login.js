import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, FormBtn } from "../form";
import API from "../../utils/API";
import { AuthContext } from "../../App";

function Login() {
  const initialState = {
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null
  };

  // Setting our component's initial state
  const [formObject, setFormObject] = React.useState(initialState);

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, use the API.saveUser method to save the user data
  // Then redirect the user to the account page
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.email && formObject.password) {
      API.loginuser({
        email: formObject.email,
        password: formObject.password
      })
        .then(res => console.log(res))
        .then(() =>
          setFormObject({
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
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2>Login Form</h2>
            <p />
            <form>
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

              {formObject.errorMessage && (
                <span className="form-error">{formObject.errorMessage}</span>
              )}

              <FormBtn
                disabled={
                  !(formObject.email && formObject.password) ||
                  formObject.isSubmitting
                }
                onClick={handleFormSubmit}
              >
                {formObject.isSubmitting ? "Loading..." : "Submit"}
              </FormBtn>
            </form>
            <br />
            <p>
              Haven't signed up with us yet? Click{" "}
              <Link to="/signup">here</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
