import React from "react";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  display: flex;
  flex-wrap: wrap;

  .card {
    margin: 10px;
  }
`;

function PageCard() {
  const cards = [
    {
      img: "assets/img/allclaims.jpg",
      title: "View Claims",
      text: "An overview of all expense claims you have created.",
      buttonText: "View Claims",
      buttonPath: "/allclaims"
    },
    {
      img: "assets/img/createclaim.jpg",
      title: "Create a Claim",
      text: "Create a new expense claim to receive your money back.",
      buttonText: "Create a Claim",
      buttonPath: "/createclaim"
    },
    {
      img: "assets/img/charts.jpg",
      title: "View Charts",
      text: "Visual representations of your expense claims in charts.",
      buttonText: "View Charts",
      buttonPath: "/charts"
    },
    {
      img: "assets/img/logout.jpg",
      title: "Log out",
      text: "Finished viewing your expense claims? Return to the homepage.",
      buttonText: "Log out",
      buttonPath: "/"
    }
  ];

  return (
    <Styles>
      {cards.map(card => {
        return (
          <Card className="card" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={card.img} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
              <Button className="btn btn-secondary" href={card.buttonPath}>{card.buttonText}</Button>
            </Card.Body>
          </Card>
        );
      })}
    </Styles>
  );
}

export default PageCard;
