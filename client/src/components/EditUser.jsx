import React, { Component } from "react";
import { Button, Form, Container } from "react-bootstrap";

import { Link } from "react-router-dom";

import Service from "../services/User.service";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this._service = new Service();
    this.state = {
      disabledButton: false,
      buttonText: "Editar usuario",
      user: this.props.user
    };
  }

  componentDidMount = () => {
    let birthDay = new Date(this.props.user.birthdate);
    // console.log(birthDay.toLocaleDateString());

    let year = birthDay.getFullYear();
    let month = birthDay.getMonth() + 1;
    let monthSte = month.toString().padStart(2, "0");
    let day = birthDay
      .getDate()
      .toString()
      .padStart(2, "0");
    // console.log(birthDay.getDay(), day);
    const string = `${year}-${monthSte}-${day}`;
    this.setState({
      user: {
        ...this.state.user,
        birthdate: string
      }
    });
    // console.log(string);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.user, "el user", "el id", this.props.user._id);
    this._service
      .editUser(this.props.user._id, this.state.user)
      .then(x => {
        this.props.closeModalWindow();
        this.props.updateUser(this.state.user);
        // this.props.updateUserList()
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
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              required
              value={this.state.user.name}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Cumpleaños</Form.Label>
            <Form.Control
              required
              type="date"
              name="birthdate"
              
              value={this.state.user.birthdate}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <div>
            <Button variant="dark" type="submit">
              Actualizar
            </Button>
          </div>
          <br></br>
          <Link
            to={`/users/user/${this.props.user._id}`}
            className="btn btn-dark"
            onClick={this.props.closeModalWindow}
          >
            Volver a usuario
          </Link>
        </Form>
      </Container>
    );
  }
}

export default EditUser;
