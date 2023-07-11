import React from "react";
import Dream from "./Dream";
import PropTypes from "prop-types";

function DreamList(props){

  return (
    <React.Fragment>
    <hr/>
    {props.dreamList.map((dream) =>
    <Dream 
    whenDreamClicked={props.onDreamSelection}
    genre={dream.genre}
    lucid={dream.lucid}
    rem={dream.rem}
    age={dream.age}
    intensity={dream.intensity}
    condition={dream.condition}
    emotionalState={dream.emotionalState}
    perceivedLength={dream.perceivedLength}
    id={dream.id}      
    key={dream.id}/> 
    )}
    </React.Fragment>
  )
}

DreamList.propTypes = {
  dreamList: PropTypes.array,
  onDreamSelection: PropTypes.func
};

export default DreamList;