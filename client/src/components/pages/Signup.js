import React, { useState, useContext} from "react";
import { Link, useHistory } from "react-router-dom";
import { Input, FormBtn } from "../form";
import API from "../../utils/API";
import AuthContext from "../AuthContext";

function Signup() {
  // Setting our component's initial state
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null
  };

  const [formObject, setFormObject] = useState(initialState);

  const { setUserId } = useContext(AuthContext);
  let history = useHistory();

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, use the API.saveUser method to save the user data
  // Then redirect the user to the account page
  function handleFormSubmit(event) {
    event.preventDefault();
    API.signupUser({
      firstname: formObject.firstname,
      lastname: formObject.lastname,
      email: formObject.email,
      password: formObject.password
    })
      .then(res => {
        const userId = res.data.user.id;
        setUserId(userId);
        console.log(`userid when setting: ${userId}`);
        console.log(AuthContext);
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

              {formObject.errorMessage && (
                <span className="form-error">{formObject.errorMessage}</span>
              )}

              <FormBtn
                disabled={
                  !(
                    formObject.firstname &&
                    formObject.lastname &&
                    formObject.email &&
                    formObject.password
                  ) || formObject.isSubmitting
                }
                onClick={handleFormSubmit}
              >
                {formObject.isSubmitting ? "Loading..." : "Submit"}
              </FormBtn>
            </form>
            <br />
            <p>
              Already have an account? Log in <Link to="/login">here</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
