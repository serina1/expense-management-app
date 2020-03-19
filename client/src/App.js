import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/pages/Landing";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Account from "./components/pages/Account";
import AllClaims from "./components/pages/AllClaims";
import CreateClaim from "./components/pages/CreateClaim";
import Charts from "./components/pages/Charts";
import NavbarLanding from "./components/landing/NavbarLanding";
import NavbarAccount from "./components/account/NavbarAccount";
import Sidebar from "./components/account/Sidebar";
import Layout from "./components/Layout";
import Jumbotron from "./components/landing/Jumbotron";

export const AuthContext = React.createContext(); // added this

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {/* <AuthContext.Provider
            value={{
              state,
              dispatch
            }}
          >
            <div className="App">
              {!state.isAuthenticated ? <Login /> : <Account />}
            </div> */}
            <Route exact path="/" component={LandingContainer} />
            <Route exact path="/signup" component={SignUpContainer} />
            <Route exact path="/login" component={SignUpContainer} />
            <Route component={AccountContainer} />
          {/* </AuthContext.Provider> */}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

function LandingContainer() {
  return (
    <React.Fragment>
      <NavbarLanding />
      <Jumbotron />
      <Layout>
        <Route exact path="/" component={Landing} />
      </Layout>
    </React.Fragment>
  );
}

function SignUpContainer() {
  return (
    <React.Fragment>
      <NavbarLanding />
      <Layout>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Layout>
    </React.Fragment>
  );
}

function AccountContainer() {
  return (
    <React.Fragment>
      <NavbarAccount />
      <Sidebar />
      <Layout>
        <Route exact path="/account" component={Account} />
        <Route exact path="/allclaims" component={AllClaims} />
        <Route exact path="/createclaim" component={CreateClaim} />
        <Route exact path="/charts" component={Charts} />
      </Layout>
    </React.Fragment>
  );
}

export default App;
