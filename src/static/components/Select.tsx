import React from "react";
import { Col, Label } from "reactstrap";

export const Select = (props: any) => {
  console.log(props.config)
  const {
    colSize,
    name,
    label
  } = props.config
  return (
    <React.Fragment>
      <Col md={colSize}>
        <div className="mb-3">
          <Label htmlFor={name} className="form-label">
            {label}
          </Label>
          <select
            id={name}
            className="form-select"
            data-choices
            data-choices-sorting="true"
          >
            <option value="">Choose...</option>
            <option>...</option>

          </select>
        </div>
      </Col>
  </React.Fragment>
  )
}