import React, { useEffect, useState } from "react";
import { Col, Label } from "reactstrap";
import { SelectService } from "@/services/FormSelect/selectService";

export const FormSelect = (props: any) => {

  const { colSize, name, label } = props.config

  const [ options, setOptions ]  =useState<{value: string, label: string}[]>([]);

  useEffect(() => {
    const fetchOptions = async () =>{
      const result = await SelectService.getOptions()
      setOptions(result);
    }

    fetchOptions()
  }, [])
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
            {options.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}

          </select>
        </div>
      </Col>
  </React.Fragment>
  )
}
