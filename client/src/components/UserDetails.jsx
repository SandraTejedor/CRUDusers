import React, { Component } from "react";
import Service from "../services/User.service";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import EditUser from "./EditUser";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {}, showModalWindow: false };
    this._service = new Service();
  }

  componentDidMount = () => {
    const userId = this.props.match.params.id;
    console.log(this.props, "el match", this.props.match);
    this._service
      .getOneUser(userId)
      .then(theUser => this.setState({ user: theUser.data }))
      .catch(err => console.log(err));
  };
  updateUser = user => {
    this.setState({ user });
  };
  deleteHandler = id => {
    this._service
      .deleteUser(id)
      .then(x => this.props.history.replace("/"))
      .catch(err => console.log("Error", err));
  };

  handleShow = () => this.setState({ showModalWindow: true });
  handleClose = () => this.setState({ showModalWindow: false });

  render() {
    let birthDay = new Date(this.state.user.birthdate);
    // console.log(birthDay.toLocaleDateString());

    let year = birthDay.getFullYear();
    let month = birthDay.getMonth() + 1;
    let monthSte = month.toString().padStart(2, "0");
    let day = birthDay
      .getDate()
      .toString()
      .padStart(2, "0");
    // console.log(birthDay.getDay(), day);
    const string = `${day}-${monthSte}-${year}`;
    return (
      <>
        <Container>
          <br />
          <section>
            <Row>
              <Col md={6}>
                <h1>Detalles de {this.state.user.name}</h1>
                <p>
                  <strong>Cumpleaños:</strong> {string}
                </p>

                <Button
                  className="btn btn-sm btn-warning"
                  onClick={() => this.handleShow()}
                >
                  Editar usuario
                </Button>
                <Button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.deleteHandler(this.props.match.params.id)}
                >
                  Borrar usuario
                </Button>
                <Link to="/" className="btn btn-sm  btn-dark">
                  Volver a usuarios
                </Link>
              </Col>
            </Row>
          </section>
        </Container>
        <Modal show={this.state.showModalWindow} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Usuario {this.state.user.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditUser
              closeModalWindow={this.handleClose}
              updateUser={this.updateUser}
              user={this.state.user}
              // id={this.props.match.params.id}
            />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default UserDetails;
