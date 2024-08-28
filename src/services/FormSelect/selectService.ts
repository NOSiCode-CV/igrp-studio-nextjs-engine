import React, { useState } from "react";

const cities = [
  { value: 'Madrid', label: 'Madrid' },
  { value: 'Toronto', label: 'Toronto' },
  { value: 'Vancouver', label: 'Vancouver' },
  { value: 'London', label: 'London' },
  { value: 'Manchester', label: 'Manchester' },
  { value: 'Liverpool', label: 'Liverpool' },
  { value: 'Paris', label: 'Paris' },
  { value: 'Malaga', label: 'Malaga' },
  { value: 'Washington', label: 'Washington' },
  { value: 'Lyon', label: 'Lyon' },
  { value: 'Marseille', label: 'Marseille' },
  { value: 'Hamburg', label: 'Hamburg' },
  { value: 'Munich', label: 'Munich' },
  { value: 'Barcelona', label: 'Barcelona' },
  { value: 'Berlin', label: 'Berlin' },
  { value: 'Montreal', label: 'Montreal' },
  { value: 'New York', label: 'New York' },
  { value: 'Michigan', label: 'Michigan' },
];

export const SelectService = {
  getOptions: async () => {
    return cities
  }
}