import React from "react";
import BlueDreamCatcher from "./../img/dream-catcher-blue.gif"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function EditUnauth() {
  return (
    <React.Fragment>
      <Container>
        <Row className="justify-content-center">
          <Col md="auto">
            <div className="p-3 mb-2 bg-dark bg-gradient text-white rounded-5">
              <h3>Let this dreamer change their own dreams</h3>
              <div className="text-center">
                <img align="center" src={BlueDreamCatcher} alt="a blue dreamcatcher" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default EditUnauth