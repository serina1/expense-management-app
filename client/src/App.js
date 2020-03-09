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
import Layout from "./components/Layout";
import Jumbotron from "./components/landing/Jumbotron";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingContainer} />
          <Route exact path="/signup" component={SignUpContainer} />
          <Route exact path="/login" component={SignUpContainer} />
          <Route component={AccountContainer} />
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
