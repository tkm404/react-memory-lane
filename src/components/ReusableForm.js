import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// find way to unbox dreamer name input


function ReusableForm(props) {
  return(
    <React.Fragment>
      <Container className="p-3 mb-2 bg-dark bg-gradient text-white rounded-5">
        <Form onSubmit={props.formSummissionHandler}>
          <Row className='mb-3'>
            <Col sm>
              <Form.Group  controlId='formGridUser'>
              <Form.Label>Tell us about your dream,</Form.Label>
              <Form.Control 
                input 
                type="text"
                name="dreamUser"
                defaultValue={props.dreamer}
                readOnly />
              </Form.Group>
            </Col>
            <Col sm>
              <Form.Group controlId='formUserGenre'>
              <Form.Label>Can you recall the dream genre?</Form.Label> 
              <Form.Control 
                input
                type='text'
                name='genre'
                // placeholders passed down from Edit form
                placeholder={props.dreamGenre} />
              </Form.Group>
            </Col>
          </Row>

          <Row className='mb-3'>
            <Col sm>
              <Form.Group controlId='formGridLevel'>
              <Form.Label>Intensity level?</Form.Label>
              <Form.Control 
                input
                type='number'
                name='intensity'
                placeholder={props.dreamIntensity} />
              </Form.Group>
            </Col>
            <Col sm>
              <Form.Group as={Col} controlId='formGridRem'>
              <Form.Label>REM Stage?</Form.Label>
              <Form.Control 
                input
                type='text'
                name='rem'
                placeholder={props.dreamRem}/>
              </Form.Group>
            </Col>
            <Col sm>
              <Form.Group controlId='formGridAge'>
              <Form.Label>Your age:</Form.Label>
              <Form.Control 
                input
                type='number'
                name='age'
                min-value='0'
                defaultValue= "ungiven"
                placeholder={props.dreamAge}/>
              </Form.Group>
            </Col>
            <Col sm>
              <Form.Group controlId='formGridLucid'>
              <Form.Label>Lucid or not?</Form.Label>
              <Form.Control
                type='checkbox'
                name='lucid'
                id='autoSizingCheck'
                className="form-check-input"
                value={props.notChecked}
                onChange={props.whenCheckboxChecked} />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className='mb-3' controlId='formLength'>
          <Form.Label>Describe your perceived dream length:</Form.Label>
          <Form.Control 
            textarea
            name='perceivedLength'
            placeholder={props.dreamLength}/>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formGridEmotion'>
          <Form.Label>Describe your emotional state in the dream:</Form.Label>
          <Form.Control 
            textarea
            name='emotionalState'
            placeholder={props.dreamEmotion}/>
          </Form.Group>
          
          <Form.Group className='mb-3' controlId='formGridSleep'>
          <Form.Label>Did you fall asleep naturally, or was sleep otherwise induced?</Form.Label>
          <Form.Control 
            textarea
            name='condition'
            placeholder={props.dreamCondition} />
          </Form.Group>
          <Button variant='primary' size='sm' type='submit' className="btn btn-primary">{props.buttonText}</Button>
        </Form>
      </Container>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  notChecked: PropTypes.bool,
  whenCheckboxChecked: PropTypes.func,
  formSummissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}


export default ReusableForm;