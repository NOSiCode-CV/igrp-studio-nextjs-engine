import { CommonProperties, Layout } from '../interfaces/types';

export const renderLayout = function(config: Layout): string {
  if (!config.componentName) return "";

  const { componentName, properties, children } = config;
  let { variant, className, ...common } = properties;

  let classes = getLayoutClasses(componentName, variant);
  if (className) classes += ` ${className}`;
  if (common) classes += ` ${getCommonPropertiesClasses(common)}`;

  let str = `<div class="${classes.trim()}">`;

  if (children && children.length > 0) {
    str += "\n" + children.map(child => renderLayout(child)).join("\n") + "\n";
  }

  str += "</div>";

  return str;
};

const getLayoutClasses = function(component: string, variant?: string): string {
  const layoutMap: Record<string, Record<string, string>> = {
    flex: {
      auto: "flex flex-auto",
      initial: "flex flex-initial",
      none: "flex flex-none",
      "flex-1": "flex-1",
      "flex-2": "flex-2",
      "flex-3": "flex-3",
      "flex-1-2": "flex-[0.5]",
      "flex-1-3": "flex-[0.33]",
      "flex-2-3": "flex-[0.66]",
      "flex-1-4": "flex-[0.25]",
      "flex-3-4": "flex-[0.75]",
      row: "flex flex-row",
      "row-reverse": "flex flex-row-reverse",
      col: "flex flex-col",
      "col-reverse": "flex flex-col-reverse",
      // Justify content options
      "justify-start": "flex justify-start",
      "justify-end": "flex justify-end",
      "justify-center": "flex justify-center",
      "justify-between": "flex justify-between",
      "justify-around": "flex justify-around",
      "justify-evenly": "flex justify-evenly",
      // Align items options
      "items-start": "flex items-start",
      "items-end": "flex items-end",
      "items-center": "flex items-center",
      "items-baseline": "flex items-baseline",
      "items-stretch": "flex items-stretch",
      // Common combinations
      center: "flex items-center justify-center",
      between: "flex items-center justify-between",
      "center-col": "flex flex-col items-center justify-center",
    },
    grid: {
      // Basic grid columns
      cols1: "grid grid-cols-1 gap-4",
      cols2: "grid grid-cols-2 gap-4",
      cols3: "grid grid-cols-3 gap-4",
      cols4: "grid grid-cols-4 gap-4",
      cols5: "grid grid-cols-5 gap-4",
      cols6: "grid grid-cols-6 gap-4",
      // Basic grid rows
      rows1: "grid grid-rows-1 gap-4",
      rows2: "grid grid-rows-2 gap-4",
      rows3: "grid grid-rows-3 gap-4",
      rows4: "grid grid-rows-4 gap-4",
      rows5: "grid grid-rows-5 gap-4",
      rows6: "grid grid-rows-6 gap-4",
      // Common layouts
      "holy-grail": "grid grid-cols-[200px_1fr_200px] grid-rows-[auto_1fr_auto] min-h-screen gap-4",
      "sidebar-left": "grid grid-cols-[250px_1fr] gap-4",
      "sidebar-right": "grid grid-cols-[1fr_250px] gap-4",
      // Column span variants
      "col-span-1": "grid col-span-1",
      "col-span-2": "grid col-span-2",
      "col-span-3": "grid col-span-3",
      "col-span-4": "grid col-span-4",
      "col-span-full": "grid col-span-full",

      // Column start variants
      "col-start-1": "grid col-start-1",
      "col-start-2": "grid col-start-2",
      "col-start-3": "grid col-start-3",
      "col-start-4": "grid col-start-4",
      "col-start-5": "grid col-start-5",
      "col-start-6": "grid col-start-6",
      "col-start-auto": "grid col-start-auto",

      // Column start with negative values
      "-col-start-1": "grid -col-start-1",
      "-col-start-2": "grid -col-start-2",
      "-col-start-3": "grid -col-start-3",
      "-col-start-4": "grid -col-start-4",
      "-col-start-5": "grid -col-start-5",
      "-col-start-6": "grid -col-start-6",

      // Column end variants
      "col-end-1": "grid col-end-1",
      "col-end-2": "grid col-end-2",
      "col-end-3": "grid col-end-3",
      "col-end-4": "grid col-end-4",
      "col-end-5": "grid col-end-5",
      "col-end-6": "grid col-end-6",
      "col-end-auto": "grid col-end-auto",

      // Column end with negative values
      "-col-end-1": "grid -col-end-1",
      "-col-end-2": "grid -col-end-2",
      "-col-end-3": "grid -col-end-3",
      "-col-end-4": "grid -col-end-4",
      "-col-end-5": "grid -col-end-5",
      "-col-end-6": "grid -col-end-6",

      // Column auto
      "col-auto": "grid col-auto",
      "cols-auto": "auto-cols-auto",
      "cols-min": "auto-cols-min",
      "cols-max": "auto-cols-max",

      // Row span variants
      "row-span-1": "grid row-span-1",
      "row-span-2": "grid row-span-2",
      "row-span-3": "grid row-span-3",
      "row-span-4": "grid row-span-4",
      "row-span-5": "grid row-span-5",
      "row-span-6": "grid row-span-6",
      "row-span-full": "grid row-span-full",

      // Row start variants
      "row-start-1": "grid row-start-1",
      "row-start-2": "grid row-start-2",
      "row-start-3": "grid row-start-3",
      "row-start-4": "grid row-start-4",
      "row-start-5": "grid row-start-5",
      "row-start-6": "grid row-start-6",
      "row-start-auto": "grid row-start-auto",

      // Row start with negative values
      "-row-start-1": "grid -row-start-1",
      "-row-start-2": "grid -row-start-2",
      "-row-start-3": "grid -row-start-3",
      "-row-start-4": "grid -row-start-4",
      "-row-start-5": "grid -row-start-5",
      "-row-start-6": "grid -row-start-6",

      // Row end variants
      "row-end-1": "grid row-end-1",
      "row-end-2": "grid row-end-2",
      "row-end-3": "grid row-end-3",
      "row-end-4": "grid row-end-4",
      "row-end-5": "grid row-end-5",
      "row-end-6": "grid row-end-6",
      "row-end-auto": "grid row-end-auto",

      // Row end with negative values
      "-row-end-1": "grid -row-end-1",
      "-row-end-2": "grid -row-end-2",
      "-row-end-3": "grid -row-end-3",
      "-row-end-4": "grid -row-end-4",
      "-row-end-5": "grid -row-end-5",
      "-row-end-6": "grid -row-end-6",

      // Row auto
      "row-auto": "row-auto",
      "rows-auto": "auto-rows-auto",
      "rows-min": "auto-rows-min",
      "rows-max": "auto-rows-max",

    },
    container: {
      default: "container mx-auto px-4",
      narrow: "container mx-auto px-4 max-w-4xl",
      wide: "container mx-auto px-4 max-w-7xl",
    },
    section: {
      default: "py-12",
      compact: "py-6",
      spacious: "py-24",
      // ...
    },
    card: {
      default: "bg-white rounded-lg shadow-md p-6",
      bordered: "bg-white rounded-lg border border-gray-200 p-6",
      elevated: "bg-white rounded-lg shadow-lg p-6"
    },
    aspect: {
      square: "aspect-square",
      video: "aspect-video",
      auto: "aspect-auto",
      portrait: "aspect-[2/3]",
      landscape: "aspect-[3/2]",
    },
    stack: {
      xs: "space-y-1",
      sm: "space-y-2",
      md: "space-y-4",
      lg: "space-y-6",
    },
    inline: {
      xs: "space-x-1",
      sm: "space-x-2",
      md: "space-x-4",
      lg: "space-x-6",
    }
  };

  return variant && layoutMap[component]?.[variant] ? layoutMap[component][variant] : "";
};

// Function to generate Tailwind classes based on CommonProperties
function getCommonPropertiesClasses(common?: CommonProperties | null): string {
  if (!common) return "";

  const classes = [
    common.padding ? `p-${common.padding}` : "",
    common.paddingX ? `px-${common.paddingX}` : "",
    common.paddingY ? `py-${common.paddingY}` : "",
    common.paddingTop ? `pt-${common.paddingTop}` : "",
    common.paddingBottom ? `pb-${common.paddingBottom}` : "",
    common.paddingLeft ? `pl-${common.paddingLeft}` : "",
    common.paddingRight ? `pr-${common.paddingRight}` : "",

    common.margin ? `m-${common.margin}` : "",
    common.marginX ? `mx-${common.marginX}` : "",
    common.marginY ? `my-${common.marginY}` : "",
    common.marginTop ? `mt-${common.marginTop}` : "",
    common.marginBottom ? `mb-${common.marginBottom}` : "",
    common.marginLeft ? `ml-${common.marginLeft}` : "",
    common.marginRight ? `mr-${common.marginRight}` : "",

    common.width ? `w-${common.width}` : "",
    common.height ? `h-${common.height}` : "",

    common.visibility ? `${common.visibility}` : "",
  ];

  return classes.filter(Boolean).join(" ");
}