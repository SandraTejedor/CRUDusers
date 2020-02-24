import React, { Component } from "react";
import Service from "../services/User.service";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
    this._service = new Service();
  }

  componentDidMount = () => {
    const userId = this.props.match.params.id;
    this._service
      .getOneUser(userId)
      .then(theUser => this.setState({ user: theUser.data }))
      .catch(err => console.log(err));
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
              <Link to="/users/allUsers" className="btn btn-dark">
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
