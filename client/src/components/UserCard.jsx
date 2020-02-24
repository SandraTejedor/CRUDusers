import React from "react";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

const UserCard = ({ _id, name, birthdate }) => {
  return (
    <Col className="coaster-card" md={4}>
      <h5>Nombre: {name}</h5>
      {/* <p>Cumpleaños: {birthdate}</p> */}
      <Link className="btn btn-sm btn-dark" to={`user/${_id}`}>
        Ver detalles
      </Link>

      <hr />
    </Col>
  );
};

export default UserCard;
