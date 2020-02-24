//import React from "react";
import React, { Component } from "react";
// import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";
import { Button, Col } from "react-bootstrap";

import Service from "../services/User.service";

// const UserCard = ({ _id, name, birthdate }) => {
//   return (
//     <Col className="coaster-card" md={4}>
//       <h5>Nombre: {name}</h5>
//       {/* <p>Cumpleaños: {birthdate}</p> */}
//       <Link className="btn btn-sm btn-dark" to={`user/${_id}`}>
//         Ver detalles
//       </Link>
//       {/* <Button
//         className="btn btn-sm btn-dark"
//         onClick={() => this.props.deleteUser(this.props._id)}
//       >
//         Borrar usuario
//       </Button> */}

//       <hr />
//     </Col>
//   );
// };

class UserCard extends Component {
  constructor(props) {
    super(props);
    this._service = new Service();
    this.state = {};
  }

  render() {
    return (
      <Col className="coaster-card" md={4}>
        <h5>Nombre: {this.props.name}</h5>
        {/* <p>Cumpleaños: {birthdate}</p> */}

        <Link className="btn btn-sm btn-dark" to={`user/${this.props._id}`}>
          Ver detalles
        </Link>
        <Button
          className="btn btn-sm btn-dark"
          onClick={() => this.props.delete(this.props._id)}
        >
          Borrar usuario
        </Button>
        <br />
        <br />
      </Col>
    );
  }
}

export default UserCard;
