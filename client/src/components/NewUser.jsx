import React, { Component } from "react";
import { Button, Form, Container, Toast } from "react-bootstrap";

import { Link } from "react-router-dom";

import Service from "../services/User.service";

class AddUser extends Component {
  constructor(props) {
    super(props);
        this._service = new Service();
    this.state = {
      user: {}
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this._service.newUser(this.state.user);
  };

  handleInputChange = e => {
    let { name, value} = e.target;
    this.setState({
      user: { ...this.state.user, [name]: value }
    });
  };


  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <br></br>
          <h2>Añadir nuevos usuarios</h2>

          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              onChange={this.handleInputChange}
              value={this.state.user}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              onChange={this.handleInputChange}
              value={this.state.user}
            />
          </Form.Group>

          <div>
            <Button variant="dark" type="submit">
              Crear
            </Button>
            <Link to="/users/allUsers" className="btn btn-dark">
              Volver a usuarios
            </Link>
          </div>
        </Form>
      </Container>
    );
  }
}

export default AddUser;
