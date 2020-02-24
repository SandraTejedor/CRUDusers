import React from "react";
import Service from "../services/User.service";

import { Container, Row, Button, Modal } from "react-bootstrap";

import UserCard from "./UserCard";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this._service = new Service();
    this.state = {
      users: []
    };
  }

  componentDidMount = () => this.updateUserList();

  updateUserList = () => {
    this._service
      .getAllUsers()
      .then(allUsersFromDB => {
        console.log("soy el console", allUsersFromDB);
        this.setState({ users: allUsersFromDB.data });
      })
      .catch(err => console.log("Error", err));
  };

  render() {
    return (
      <section>
        <Container>
            
          <h1>Usuarios: </h1>
          <br />

          {/* <Button variant="dark">
              Nuevo usuario
            </Button> */}

          <Row>
            {this.state.users.map(user => (
              <UserCard key={user._id} {...user} />
            ))}
          </Row>
        </Container>
      </section>
    );
  }
}

export default UserList;
