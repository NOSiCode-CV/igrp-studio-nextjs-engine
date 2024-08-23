import React from "react"
import { Row, Form, Card, CardBody, Col } from "reactstrap"
import { InputForm } from "../../fields/InputForm"

export const FormLayout = (props: any) => {
  const { config, btnConfig } = props
  return (
    <Card className="mt-3">
      <CardBody>
        <Form>
          <Row>
            {config.map((field: any, index: number) => <InputForm key={index} config={field}/>)}
            <Col md={12}>
              <div className="text-end">
                <button type="submit" className="btn btn-primary">
                  {btnConfig}
                </button>
              </div>
            </Col>
          </Row>
        </Form>          
      </CardBody>
    </Card>
  )
}
