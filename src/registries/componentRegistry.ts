import { COMPONENTS } from '../utils/constants';

export interface ComponentMetadata {
  import?: string | string[],
  tag?: string,
  stateTemplate?: string
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
      import: 'import { Input } from "@/components/ui/input";',
      stateTemplate: 'const [{{id}}, set{{capitalizedId}}] = useState("");',
    },
    button: {
      tag: "Button",
      import: 'import { Button } from "@/components/ui/button";',
    },
    label: {
      tag: "Label",
      import: 'import { Label } from "@/components/ui/label";',
    },
    checkbox: {
      tag: "Checkbox",
      import: 'import { Checkbox } from "@/components/ui/checkbox";',
      stateTemplate: 'const [{{id}}, set{{capitalizedId}}] = useState(false);',
    }
  }) as [Components, ComponentMetadata][]
);

export type Components = (typeof COMPONENTS)[number];