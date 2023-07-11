import React from "react";
import PropTypes from "prop-types";

function Dream(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenDreamClicked(props.id)}>
        <h3>{props.genre}</h3>
        <p>{props.lucid}</p>
        <p>{props.intensity}</p>
        <p>{props.rem}</p>
        <p>{props.perceivedLength}</p>
        <p>{props.emotionalState}</p>
        <p>{props.condition}</p>
        <p>{props.age}</p>
        <hr/>
      </div>
    </React.Fragment>
  )
}

Dream.propTypes = {
  whenDreamClicked: PropTypes.func,
  genre: PropTypes.string, 
  lucid: PropTypes.bool,
  intensity: PropTypes.number,
  rem: PropTypes.string,
  perceivedLength: PropTypes.string, 
  emotionalState: PropTypes.string,
  condition: PropTypes.string,
  age: PropTypes.number
}

export default Dream;