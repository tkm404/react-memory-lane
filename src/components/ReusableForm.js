import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return(
    <React.Fragment>
      <form onSubmit={props.formSummissionHandler}>
        <label>Can you recall the dream genre?
        <input
          type='text'
          name='genre'
          placeholder={props.genre}/>
        </label>
        <label>Was your dream lucid or not?
        <input
          type='checkbox'
          name='lucid'
          onChange={props.onCheckboxChecked}
          placeholder={props.lucid}/>
        </label>
        <label>What was the intensity level of your dream?
        <input
          type='number'
          name='intensity'
          placeholder={props.intensity}/>
        </label>
        <label>What stage of REM would you say you were in? <a href='/rem'>View REM reference page for assistance</a>
        <input
          type='text'
          name='rem'
          placeholder={props.rem}/>
        </label>
        <label>Describe your perceived dream length:
        <textarea
          name='perceivedLength'
          placeholder={props.perceivedLength}/>
          </label>
        <label> Describe your emotional state in the dream:
        <textarea
          name='emotionalState'
          placeholder={props.emotionalState}/>
          </label>
        <label> Did you fall asleep naturally, or was sleep otherwise induced?
        <textarea
          name='condition'
          placeholder={props.condition}/>
          </label>
        <input
          type='number'
          name='age'
          placeholder={props.age}/>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSummissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}


export default ReusableForm;