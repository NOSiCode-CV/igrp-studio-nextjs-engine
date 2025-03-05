import { CommonProperties } from '../interfaces/types';

// Function to generate Tailwind classes based on CommonProperties
export function getCommonPropertiesClasses(common?: CommonProperties | null): string {
  if (!common) return '';

  const classes = [
    common.padding ? `p-${common.padding}` : '',
    common.paddingX ? `px-${common.paddingX}` : '',
    common.paddingY ? `py-${common.paddingY}` : '',
    common.paddingTop ? `pt-${common.paddingTop}` : '',
    common.paddingBottom ? `pb-${common.paddingBottom}` : '',
    common.paddingLeft ? `pl-${common.paddingLeft}` : '',
    common.paddingRight ? `pr-${common.paddingRight}` : '',

    common.margin ? `m-${common.margin}` : '',
    common.marginX ? `mx-${common.marginX}` : '',
    common.marginY ? `my-${common.marginY}` : '',
    common.marginTop ? `mt-${common.marginTop}` : '',
    common.marginBottom ? `mb-${common.marginBottom}` : '',
    common.marginLeft ? `ml-${common.marginLeft}` : '',
    common.marginRight ? `mr-${common.marginRight}` : '',

    common.width ? `w-${common.width}` : '',
    common.height ? `h-${common.height}` : '',

    common.visibility ? `${common.visibility}` : '',
  ];

  return classes.filter(Boolean).join(' ');
}