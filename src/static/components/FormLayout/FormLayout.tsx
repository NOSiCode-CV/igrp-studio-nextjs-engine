import React from "react"
import { Row, Form, Card, CardBody, Col } from "reactstrap"
import { FormInput, FormInputProps } from "@/static/fields/FormInput/FormInput"
import { FormSelect } from "../FormSelect/FormSelect"
import { InputType } from "reactstrap/types/lib/Input"

export type FormLayoutProps = {
  fields: ({
    type: InputType
  } &
  FormInputProps)[]
}

export interface GeneralFormInputProps {
  type: InputType
}

export const FormLayout = (props: FormLayoutProps) => {
  const {  fields } = props
  return (
    <Card className="mt-3">
      <CardBody>
        <Form>
          <Row>
            {
              fields.map((field: GeneralFormInputProps, index: number) => 
                ( 
                  field.type === 'select' ? 
                  <FormSelect key = {index} config = {field} />  :
                  <FormInput key={index} config={field}/>
                )
              )
            } 
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
