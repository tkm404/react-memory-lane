import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function DreamSubmitForm(props){

  // see Dream component for "oneOfType," PropType that lets us use "Ungiven/Unknown" in place of a number.
  function handleNewDreamFormSubmission(event) {
    event.preventDefault();
    props.onDreamSubmission({
      dreamUser: event.target.dreamUser.value,
      genre: event.target.genre.value || "Ungiven/Unknown",
      lucid: event.target.lucid.value,
      intensity: parseInt(event.target.intensity.value) || "Ungiven/Unknown",
      rem: event.target.rem.value || "Ungiven/Unknown",
      perceivedLength: event.target.perceivedLength.value || "Ungiven/Unknown",
      emotionalState: event.target.emotionalState.value || "Ungiven/Unknown",
      condition: event.target.condition.value || "Ungiven/Unknown",
      age: parseInt(event.target.age.value) || "Ungiven/Unknown"
    });
  }

  return (
    <React.Fragment>
    <ReusableForm
    dreamer = {props.dreamUser}
    formSummissionHandler = {handleNewDreamFormSubmission}
    notChecked = {props.boxNotChecked}
    whenCheckboxChecked = {props.onCheckboxChecked}
    buttonText="Submit Dream Log" />
    </React.Fragment>
  )
};

DreamSubmitForm.propTypes = {
  boxNotChecked: PropTypes.bool,
  onDreamSubmission: PropTypes.func,
  onCheckboxChecked: PropTypes.func
};

export default DreamSubmitForm;