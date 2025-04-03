export function length(array: any) {
  return array.length;
}

export function getIndex (array: any, index: number) {
  return array && array[index]
}

export function getAttribute (array: any, index: number, attribute: string) {
  return array && array[index] ? array[index][attribute] : "";
}

