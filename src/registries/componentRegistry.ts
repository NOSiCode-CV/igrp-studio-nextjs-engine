import { COMPONENTS } from '../utils/constants';

export interface ComponentMetadata {
  import?: string | string[],
  tag?: string,
  stateTemplate?: string,
  template?: string
}

export const COMPONENT_REGISTRY: Map<Components, ComponentMetadata>
  = new Map(Object.entries({
    aspect: {tag: "div"},
    card: {tag: "div"},
    container: {tag: "div"},
    flex: {tag: "div"},
    grid: {tag: "div"},
    inline: {tag: "div"},
    section: {tag: "div"},
    stack: {tag: "div"},
    input: {
      tag: "Input",
      import: 'import { Input } from "@igrp/igrp-framework-react-design-system";',
      stateTemplate: 'const [{{id}}, set{{capitalizedId}}] = useState("");',
    },
    button: {
      tag: "Button",
      import: 'import { Button } from "@igrp/igrp-framework-react-design-system";',
    },
    label: {
      tag: "Label",
      import: 'import { Label } from "@igrp/igrp-framework-react-design-system";',
    },
    checkbox: {
      //tag: "Checkbox",
      //import: 'import { Checkbox } from "@/components/ui/checkbox";',
      //stateTemplate: 'const [{{id}}, set{{capitalizedId}}] = useState(false);',
    }
  }) as [Components, ComponentMetadata][]
);

export type Components = (typeof COMPONENTS)[number];