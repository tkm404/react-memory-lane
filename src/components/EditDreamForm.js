import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditDreamForm(props) {
  const { dream } = props;

  function handleEditDreamFormSubmission(event) {
    event.preventDefault();
    props.onEditDream({
      genre: event.target.genre.value,
      lucid: event.target.lucid.value,
      intensity: parseInt(event.target.intensity.value),
      rem: event.target.rem.value,
      perceivedLength: event.target.perceivedLength.value,
      emotionalState: event.target.emotionalState.value,
      condition: event.target.condition.value,
      age: parseInt(event.target.age.value),
      id: dream.id
    })
  }

  return (
    <React.Fragment>
      <ReusableForm
      // pass down ticket values for placeholders
        formSummissionHandler={handleEditDreamFormSubmission}
        whenCheckboxChecked = {props.onCheckboxChecked}
        buttonText="Update Dream" />
    </React.Fragment>
  )
}

EditDreamForm.propTypes = {
  onEditDream: PropTypes.func,
  onCheckboxChecked: PropTypes.func,
  dream: PropTypes.object
}

export default EditDreamForm;