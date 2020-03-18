import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import backgroundImage from "../../assets/img/background.jpg";
import SignupButton from "./SignupButton";

const Styles = styled.div`
  .jumbo {
    background: url(${backgroundImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 700px;
    position: relative;
    z-index: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  .overlay {
    background-color: #000;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

function Jumbotron() {
  return (
    <Styles>
      <Jumbo fluid className="jumbo">
        <div className="overlay" />
        <Container>
          <h1>Hello There</h1>
          <span>
            A free expense management application for smaller businesses and
            start ups.
          </span>
          <p />
          <span>
            <Link to="/signup">
              <SignupButton>Sign Up</SignupButton>
            </Link>
          </span>
        </Container>
      </Jumbo>
    </Styles>
  );
}

export default Jumbotron;
