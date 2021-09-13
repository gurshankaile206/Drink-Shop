import React from 'react';
import Proptypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ReusableForm(props) {
  return (
    <React.Fragment>
      <Form>
  <Row>
    <Col>
      <Form.Control 
      placeholder="Drink Name" 
      type="text"
      name = "name"/>
    </Col>
    <Col>
      <Form.Control placeholder="Drink Brand" 
      type="text"
      name = "brand"/>
    </Col>
    <Col>
      <Form.Control placeholder="Drink Price" 
      type="text"
      name = "price"/>
    </Col>
    <Col>
      <Form.Control placeholder="Alcohol Content" 
      type="text"
      name = "alcoholContent"/>
    </Col>
  </Row>
  <Button type = 'submit' variant="outline-success" size="lg">
  {props.buttonText}
  </Button>
</Form>
    </React.Fragment>
  )
}

export default ReusableForm;
