import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import backgroundImage from "../assets/img/background.jpg";

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
        <div className="overlay"></div>
        <Container>
            <h1>Welcome</h1>
            <p>
              A free expense management application for smaller businesses and
              start ups.
            </p>
            <p><Link to="/signup">
              <button type="button" class="btn btn-primary text-center">
                Sign Up
              </button>
            </Link>
            </p>
        </Container>
      </Jumbo>
    </Styles>
  );
}

export default Jumbotron;
