import React, { Component } from "react";
import { Button, Form, Container } from "react-bootstrap";

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
      },
      errorMessage: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    //aqui las condiciones
    //condicion de que ningun campo esté vacio
    if (
      this.state.user.name.length == 0 ||
      this.state.user.birthdate.length == 0
    ) {
      this.setState({ errorMessage: "Rellena ambos campos" });
      return;
    }

    let birthDay = new Date(this.state.user.birthdate);
    let year = birthDay.getFullYear();

    //condición de fecha de nacimiento
    if (year < 1900 || year > 2020) {
      this.setState({ errorMessage: "Añade una fecha correcta" });
      return;
    }

    this._service
      .newUser(this.state.user)
      .then(x => {
        this.setState({ user: { name: "", birthdate: "" }, errorMessage: "" });
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
          <h2>Añadir un nuevo usuario</h2>

          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              // required
              value={this.state.user.name}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Cumpleaños</Form.Label>
            <Form.Control
              type="date"
              name="birthdate"
              // required
              // pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"
              pattern="(?:19|20)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])-(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])-(?:30))|(?:(?:0\[13578\]|1\[02\])-31))"
              value={this.state.user.birthdate}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <div>
            <Button variant="success" type="submit">
              Añadir
            </Button>
          </div>
          <br></br>
          <p className="aviso">{this.state.errorMessage}</p>
          <Link to="/" className="btn btn-dark">
            Volver a usuarios
          </Link>
        </Form>
      </Container>
    );
  }
}

export default AddUser;
