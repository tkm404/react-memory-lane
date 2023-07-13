import React from "react";
import Dream from "./Dream";
import PropTypes from "prop-types";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DreamList(props){
  return (
  <Container>
    <Row>
      <Col>
        <React.Fragment>
        <div className="p-3 mb-2 bg-dark bg-gradient text-white rounded-5">
        {props.dreamList.map((dream) =>
        <Dream 
        whenDreamClicked={props.onDreamSelection}
        dreamerIs = {dream.dreamUser}
        genre={dream.genre}
        lucid={dream.lucid}
        rem={dream.rem}
        age={dream.age}
        intensity={dream.intensity}
        condition={dream.condition}
        emotionalState={dream.emotionalState}
        perceivedLength={dream.perceivedLength}
        // userId ={something.uid}
        id={dream.id}      
        key={dream.id}/> 
        )}
        </div>
        </React.Fragment>
      </Col>
    </Row>
  </Container>
  )
}

DreamList.propTypes = {
  dreamList: PropTypes.array,
  onDreamSelection: PropTypes.func
};

export default DreamList;