import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from "prop-types"
import Button from "react-bootstrap/Button";

function DeleteDream(props){
  const { dream, onClickingDeleteFoReal } = props
  return(
    <React.Fragment>
      <Container>
        <Row>
          <Col>
          <h3> Are you sure you want to delete this dream?</h3>
          <Button variant='primary' size='sm' type='submit' className="btn btn-primary" onClick={()=> onClickingDeleteFoReal(dream.id)}>Delete This Dream</Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

DeleteDream.propTypes = {
  onClickingDeleteFoReal: PropTypes.func,
  dream: PropTypes.object
}

export default DeleteDream