import React from "react";
import { Col, Input, Label } from "reactstrap";
import { Select } from "../components/Select";

export const InputForm = (props: any) => {
  const {
    colSize,
    name,
    label,
    type,
    maxLength,
    minLength,
    placeholder 
  } = props.config;

  return (
    <React.Fragment>
      {type === 'select'? (<Select config = {props.config} />) 
      :
      (
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
      )}
    </React.Fragment>
  );
};

