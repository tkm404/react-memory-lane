import React from 'react';
import PropTypes from 'prop-types';



function ReusableForm(props) {
  return(
    <React.Fragment>
      <hr />
      <form onSubmit={props.formSummissionHandler}>
        <label>Can you recall the dream genre? </label> 
        <input
          type='text'
          name='genre'
          placeholder={props.genre}/>

        <br />
        <br />
        <label>Was your dream lucid or not?  </label>
        <input
          type='checkbox'
          name='lucid'
          className="form-check-input"
          onChange={props.onCheckboxChecked}
          placeholder={props.lucid}/>
        <br />
        <br />
        <label>What was the intensity level of your dream? </label>
        <input
          type='number'
          name='intensity'
          placeholder={props.intensity}/>
        <br />
        <br />
        <label>What stage of REM would you say you were in? <a href='/rem'>View REM reference page for assistance</a> </label>
        <input
          type='text'
          name='rem'
          placeholder={props.rem}/>
        <br />
        <br />
        <label>Describe your perceived dream length: </label>
        <textarea
          name='perceivedLength'
          placeholder={props.perceivedLength}/>
          <br />
          <br />
        <label> Describe your emotional state in the dream: </label>
        <textarea
          name='emotionalState'
          placeholder={props.emotionalState}/>
          
          <br />
          <br />
        <label> Did you fall asleep naturally, or was sleep otherwise induced? </label>
        <textarea
          name='condition'
          placeholder={props.condition}/>
          <br />
          <br />
          <label> Your age: </label>
          <br />
        <input
          type='number'
          name='age'
          min-value='0'
          defaultValue= "ungiven"
          placeholder={props.age}/>
          <br />
          <br />
        <button type='submit' className="btn btn-primary">{props.buttonText}</button>
    
      </form>
      <hr />
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSummissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}


export default ReusableForm;