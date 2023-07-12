import React from "react";
import PropTypes from "prop-types";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function DreamDetail(props){
  const { dream, onClickingDelete, onClickingEdit } = props;
  
  return (
    <Container>
      <Row>
        <Col>
          <React.Fragment>
          <hr/>
          <div className="p-3 mb-2 bg-dark bg-gradient text-white rounded-5">
          <h1>Dreamers Dream</h1>
          <p>Genre: {dream.genre}</p>
          <p>Lucidity: {dream.lucid}</p>
          <p>Intensity: {dream.intensity}</p>
          <p>REM Stage: {dream.rem}</p>
          <p>Perceived Length: {dream.perceivedLength}</p>
          <p>Emotional State: {dream.emotionalState}</p>
          <p>Sleep Condition(s): {dream.condition}</p>
          <p>Dreamer Age: {dream.age}</p>
          
          <div className="mb-2">
          <Button variant="primary" size="sm" onClick ={onClickingEdit}>Edit</Button>{' '}

          <Button variant="primary" size="sm" onClick ={()=> onClickingDelete(dream.id)}>Delete</Button>
          </div>
          </div>
          <hr/>
        </React.Fragment>
      </Col>
    </Row>
  </Container>
  )
}

DreamDetail.propTypes = {
  dream: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default DreamDetail;