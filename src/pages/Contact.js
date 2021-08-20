import React from 'react'
import { Form ,Button } from 'react-bootstrap'


export default ()=>(

    <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Enter Your Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Enter Your Message : </Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button variant="secondary">Send</Button>{' '}
</Form>

)