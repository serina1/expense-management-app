import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  padding-top: 50px;
  padding-left: 260px;
  padding-right: 80px;
`;

function Layout(props) {
  return (
    <Styles>
      <Container fluid>{props.children}</Container>
    </Styles>
  );
}

export default Layout;
