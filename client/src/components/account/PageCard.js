import React from "react";
import {Link} from "react-router-dom";
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
      id: 1,
      img: "assets/img/allclaims.jpg",
      title: "View Claims",
      text: "An overview of all expense claims you have created.",
      buttonText: "View Claims",
      buttonPath: "/allclaims"
    },
    {
      id: 2,
      img: "assets/img/createclaim.jpg",
      title: "Create a Claim",
      text: "Create a new expense claim to receive your money back.",
      buttonText: "Create a Claim",
      buttonPath: "/createclaim"
    },
    {
      id: 3,
      img: "assets/img/charts.jpg",
      title: "View Charts",
      text: "Visual representations of your expense claims in charts.",
      buttonText: "View Charts",
      buttonPath: "/charts"
    },
    {
      id: 4,
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
          <Card className="card" key={card.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={card.img} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
              <Link to={card.buttonPath}>
                <Button className="btn btn-secondary">{card.buttonText}</Button>
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </Styles>
  );
}

export default PageCard;
