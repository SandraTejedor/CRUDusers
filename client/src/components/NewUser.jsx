import React, { Component } from "react";
import { Button, Form, Container, Toast } from "react-bootstrap";

import { Link } from "react-router-dom";

import Service from "../services/User.service";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this._service = new Service();
    this.state = {
      user: {
        name: "",
        birthdate: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this._service
      .newUser(this.state.user)
      .then(x => {
        this.setState({ user: { name: "", birthdate: "" } });
        //this.props.updateCoastersList()
      })
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    let { name, value } = e.target;
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
              value={this.state.user.name}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Cumpleaños</Form.Label>
            <Form.Control
              type="date"
              name="birthdate"
              value={this.state.user.birthdate}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <div>
            <Button variant="dark" type="submit">
              Crear
            </Button>
          </div>
          <br></br>
          <Link to="/users/allUsers" className="btn btn-dark">
            Volver a usuarios
          </Link>
        </Form>
      </Container>
    );
  }
}

export default AddUser;
