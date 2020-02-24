import React, { Component } from "react";
import Service from "../services/User.service";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
    this._service = new Service();
  }

  componentDidMount = () => {
    const userId = this.props.match.params.id;
    console.log(this.props, "el match");
    this._service
      .getOneUser(userId)
      .then(theUser => this.setState({ user: theUser.data }))
      .catch(err => console.log(err));
  };
  deleteHandler = id => {
    this._service
      .deleteUser(id)
      .then(x => this.props.history.replace("/users/allUsers"))
      .catch(err => console.log("Error", err));
  };

  render() {
    return (
      <Container>
        <section>
          <Row>
            <Col md={6}>
              <h1>Detalles de {this.state.user.name}</h1>
              <p>
                <strong>Cumpleaños:</strong> {this.state.user.birthdate}
              </p>

              <Button
                className="btn btn-sm btn-dark"
                onClick={() => this.deleteHandler(this.props.match.params.id)}
              >
                Borrar usuario
              </Button>
              <Link to="/users/allUsers" className="btn btn-sm  btn-dark">
                Volver a usuarios
              </Link>
            </Col>
          </Row>
        </section>
      </Container>
    );
  }
}

export default UserDetails;
