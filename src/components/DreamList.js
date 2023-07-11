import React from "react";
import Dream from "./Dream";
import PropTypes from "prop-types";

function DreamList(props){

  return (
    <React.Fragment>
    <hr/>
    {props.dreamList.map((dream) =>
    <Dream 
    
          /> 
    
    )}
    </React.Fragment>
  )
}

DreamList.propTypes = {
  dreamList: PropTypes.array,
  onDreamSelection: PropTypes.func
};

export default DreamList;