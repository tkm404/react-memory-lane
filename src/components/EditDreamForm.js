import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditDreamForm(props) {
  const { dream, boxNotChecked, onCheckboxChecked  } = props;

  function handleEditDreamFormSubmission(event) {
    event.preventDefault();
    props.onEditDream({
      genre: event.target.genre.value || "Ungiven/Unknown",
      lucid: event.target.lucid.value,
      intensity: parseInt(event.target.intensity.value) || "Ungiven/Unknown",
      rem: event.target.rem.value || "Ungiven/Unknown",
      perceivedLength: event.target.perceivedLength.value || "Ungiven/Unknown",
      emotionalState: event.target.emotionalState.value || "Ungiven/Unknown",
      condition: event.target.condition.value || "Ungiven/Unknown",
      age: parseInt(event.target.age.value) || "Ungiven/Unknown",
      id: dream.id
    })
  }
  
  return (
    <React.Fragment>
      <ReusableForm
      // pass down ticket values for placeholders
        dreamer = {dream.dreamUser}
        dreamGenre = {dream.genre}
        dreamLucidity = {dream.lucid}
        dreamIntensity = {dream.intensity}
        dreamRem = {dream.rem}
        dreamLength = {dream.perceivedLength}
        dreamEmotion = {dream.emotionalState}
        dreamCondition = {dream.condition}
        dreamAge = {dream.age}
        
        formSummissionHandler={handleEditDreamFormSubmission}
        notChecked = {boxNotChecked}
        whenCheckboxChecked = {onCheckboxChecked}
        buttonText="Update Dream" />
    </React.Fragment>
  )
}

EditDreamForm.propTypes = {
  boxNotChecked: PropTypes.bool,
  onEditDream: PropTypes.func,
  onCheckboxChecked: PropTypes.func,
  dream: PropTypes.object
}

export default EditDreamForm;