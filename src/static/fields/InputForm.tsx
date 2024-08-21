import React from "react";
import { Col, Input, Label } from "reactstrap";

const FormInput = (props: any) => {
  const {
    colSize,
    name,
    label,
    type,
    maxLength,
    minLength,
    placeholder = `Enter your ${label.toLowerCase()}`
  } = props.config;

  return (
    <React.Fragment>
      <Col md={colSize}>
        <div className="mb-3">
          <Label htmlFor={name} className="form-label">
            {label}
          </Label>
          <Input
            type={type}
            className="form-control"
            placeholder={placeholder}
            maxLength={maxLength}
            minLength={minLength}
            id={name}
          />
        </div>
      </Col>
    </React.Fragment>
  );
};

export default FormInput;
