import React, { Component } from "react";
// import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";
import { Button, Col } from "react-bootstrap";

import Service from "../services/User.service";

class UserCard extends Component {
  constructor(props) {
    super(props);
    this._service = new Service();
    this.state = {};
  }
  deleteHandler = id => {
    this._service
      .deleteUser(id)
      .then(x => this.updateUserList())
      .catch(err => console.log("Error", err));
  };
  render() {
    return (
      <Col className="coaster-card" md={4}>
        <h5>Nombre: {this.props.name}</h5>
        {/* <p>Cumpleaños: {birthdate}</p> */}

        <Link
          className="btn btn-sm btn-info"
          to={`users/user/${this.props._id}`}
        >
          Ver detalles
        </Link>
        <Button
          className="btn btn-sm btn-danger"
          onClick={() => this.props.delete(this.props._id)}
        >
          Borrar usuario
        </Button>
        <hr />
      </Col>
    );
  }
}

export default UserCard;
