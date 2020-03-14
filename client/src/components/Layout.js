import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  padding: 120px 80px 80px 260px;
`;

function Layout(props) {
  return (
    <Styles>
      <Container fluid>{props.children}</Container>
    </Styles>
  );
}

export default Layout;
