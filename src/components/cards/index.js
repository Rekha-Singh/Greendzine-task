import React from "react";
import { Card, Col, Image } from "react-bootstrap";

const id_circle = {
  width: 30,
  height: 30,
  margin:-10

};
const img_size = {
  width: 450,
  height: 250,

};
const Cards = ({ userName = "User Name", imgUrl = "/logo192.png", id = 2 }) => {
  return (
    <>
      <Card
        className="p-4 rounded-4 position-relative"
      >
        <div
          className="d-flex border border-black rounded-circle justify-content-center align-items-center position-absolute top-0 end-0 text-white bg-dark"
          style={id_circle}
        >
          {id}
        </div>
        <Card.Img variant="top" src={imgUrl} className="rounded-4 img-fluid" style={img_size}/>
        <Card.Body className="text-center">
          <Card.Title>{userName}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
