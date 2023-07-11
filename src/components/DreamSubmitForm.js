import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function DreamSubmitForm(props){

  function handleNewDreamFormSubmission(event) {
    event.preventDefault();
    props.onDreamSubmission({
      genre: event.target.genre.value,
      lucid: event.target.lucid.value,
      intensity: parseInt(event.target.intensity.value),
      rem: event.target.rem.value,
      perceivedLength: event.target.perceivedLength.value,
      emotionalState: event.target.emotionalState.value,
      condition: event.target.condition.value,
      age: parseInt(event.target.age.value)
    });
  }

  return (
    <React.Fragment>
    <ReusableForm
    formSubmitHandler = {handleNewDreamFormSubmission}
    whenCheckboxChecked = {props.onCheckboxChecked}
    buttonText="Submit Dream Log"
    />
    </React.Fragment>
  )
};

DreamSubmitForm.propTypes = {
  onDreamSubmission: PropTypes.func,
  onCheckboxChecked: PropTypes.func
};

export default DreamSubmitForm;