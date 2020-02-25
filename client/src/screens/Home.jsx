//import Card from "./components/Card";

import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <br></br>
      <Row>
        <section>
          <h1>CRUD of Users</h1>
          <Link to="/" className="btn btn-sm  btn-dark">
            Ver usuarios
          </Link>
        </section>
      </Row>
    </Container>
  );
};

export default Home;
