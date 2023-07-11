import React from "react";
import PropTypes from "prop-types";

function DreamDetail(props){
  const { dream, onClickingDelete, onClickingEdit } = props;
  
  return (
    <React.Fragment>
      <h1>Dreamers Dream</h1>
      <p>{dream.genre}</p>
      <p>{dream.lucid}</p>
      <p>{dream.intensity}</p>
      <p>{dream.rem}</p>
      <p>{dream.perceivedLength}</p>
      <p>{dream.emotionalState}</p>
      <p>{dream.condition}</p>
      <p>{dream.age}</p>
      <button onClick ={onClickingEdit}>Edit</button>
      <button onClick ={()=> onClickingDelete(dream.id)}>Delete</button>
      <hr/>
    </React.Fragment>
  )
}

DreamDetail.propTypes = {
  dream: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default DreamDetail;