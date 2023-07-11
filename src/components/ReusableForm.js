import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return(
    <React.Fragment>
      <hr />
      <form onSubmit={props.formSummissionHandler}>
        <label>Can you recall the dream genre? 
        <input
          type='text'
          name='genre'
          placeholder={props.genre}/>
        </label>
        <br />
        <br />
        <label>Was your dream lucid or not? 
        <input
          type='checkbox'
          name='lucid'
          onChange={props.onCheckboxChecked}
          placeholder={props.lucid}/>
        </label>
        <br />
        <br />
        <label>What was the intensity level of your dream?
        <input
          type='number'
          name='intensity'
          placeholder={props.intensity}/>
        </label>
        <br />
        <br />
        <label>What stage of REM would you say you were in? <a href='/rem'>View REM reference page for assistance</a>
        <input
          type='text'
          name='rem'
          placeholder={props.rem}/>
        </label>
        <br />
        <br />
        <label>Describe your perceived dream length:
        <textarea
          name='perceivedLength'
          placeholder={props.perceivedLength}/>
          </label>
          <br />
          <br />
        <label> Describe your emotional state in the dream:
        <textarea
          name='emotionalState'
          placeholder={props.emotionalState}/>
          </label>
          <br />
          <br />
        <label> Did you fall asleep naturally, or was sleep otherwise induced?
        <textarea
          name='condition'
          placeholder={props.condition}/>
          </label>
          <br />
          <br />
        <input
          type='number'
          name='age'
          placeholder={props.age}/>
          <br />
          <br />
        <button type='submit'>{props.buttonText}</button>
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