import React from "react"
import { Col, Row, Form, Container } from "reactstrap"
import FormInput from '../fields/InputForm';

export const FormLayout = (props: any) => {
  return (
    <React.Fragment>
      <Container fluid>
        <Col xxl={6}>
          <Form>
            <Row>
              <FormInput props = {props}/>
            </Row>
          </Form>
        </Col>
      </Container>
    </React.Fragment>
  )
}