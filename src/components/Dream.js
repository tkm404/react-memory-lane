import React from "react";
import PropTypes from "prop-types";

function Dream(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenDreamClicked(props.id)}>
        <h3>Dream Genre: {props.genre}</h3>
        <p>Dream Lucidity: {props.lucid}</p>
        <p>Dream Intensity: {props.intensity}</p>
        <p>REM Stage: {props.rem}</p>
        <p>Perceived Length of Dream: {props.perceivedLength}</p>
        <p>Emotional State: {props.emotionalState}</p>
        <p>Sleep Condition(s): {props.condition}</p>
        <p>Age of Dreamer: {props.age}</p>
        <hr/>
      </div>
    </React.Fragment>
  )
}

Dream.propTypes = {
  whenDreamClicked: PropTypes.func,
  genre: PropTypes.string, 
  lucid: PropTypes.string,
  intensity: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(["Ungiven/Unknown"])
  ]),
  rem: PropTypes.string,
  perceivedLength: PropTypes.string, 
  emotionalState: PropTypes.string,
  condition: PropTypes.string,
  age: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['Ungiven/Unknown'])
  ])
}

export default Dream;