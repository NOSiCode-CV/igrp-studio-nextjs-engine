import React from "react"
import { Row, Form, Card, CardBody, Col } from "reactstrap"
import { FormInput, FormInputConfig } from "@/static/fields/FormInput/FormInput"

export const FormLayout = (props: any) => {
  const { config } = props
  return (
    <Card className="mt-3">
      <CardBody>
        <Form>
          <Row>
            {config.map((field: FormInputConfig, index: number) => <FormInput key={index} config={field}/>)}
            <Col md={12}>
              <div className="text-end">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </Col>
          </Row>
        </Form>          
      </CardBody>
    </Card>
  )
}
