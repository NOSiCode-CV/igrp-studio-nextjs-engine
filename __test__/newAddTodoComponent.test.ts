import { initComponents, newComponent } from '../src';
import { ComponentConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

const componentConfig: ComponentConfig = {
  id: 'e34RfF3',
  type: 'component',
  name: 'AddTodo',
  path: 'addtodo',
  args: [
    {
      name: '{ onAdd }',
      type: 'AddTodoProps',
    },
  ],
  components: {
    id: 'form_add_todo',
    componentName: 'form',
    properties: {
      className: "flex space-x-2"
    },
    children: [
      {
        id: 'input_add_todo',
        componentName: "inputText",
        properties: {
          placeholder: "Add a new task...",
          className: "flex-1",
        },
        interactions: {
          onChange: {
            fnCustomSet: `(e) => setTitle(e.target.value)`,
          }
        }
      },
      {
        id: 'button_add_todo',
        componentName: "button",
        properties: {
          type: "submit",
          size: "icon",
          iconProperties: {
            iconName: "Plus"
          }
        },
      }
    ],
    interactions: {
      onSubmit: {
        fnName: 'handleSubmit',
        actionName: "addTodo",
        fnCustomCode: {
          imports: [
            { namespace: `import { useRouter } from 'next/navigation'`},
            { namespace: `import { toast } from 'sonner'`},
            { namespace: `interface AddTodoProps { onAdd?: (todo: any) => void}`},
          ],
          states: [{ state: `const [title, setTitle] = useState('');` }],
          actionCode: `
          
  import { getTodos, setTodos } from "@/app/pages/todolist/actions/gettodos";
          
  export async function addTodo(title: string) {
    const newTodo = {
      id: Math.random().toString(36).substring(7),
      title,
      completed: false,
      createdAt: new Date(),
    };
    
    const todos = await getTodos();
    
    await setTodos([newTodo, ...todos]);
    return newTodo;
  }        
          `,
          fnCode: `
          
  const router = useRouter()
          
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    
    const newTodo = await addTodo(title)
    if (onAdd) {
      onAdd(newTodo)
    }
    setTitle('')
    router.refresh()
    
    toast.success(\`Added: \${title}\`, {
      icon: "➕"
    });
  }
          `
        },
        type: "both"
      }
    }
  }
};

beforeAll(async () => {
  await initComponents();
});

describe('Add Todo Component module',() =>{
  it('should save the component configuration file', async()=> {
    await newComponent(componentConfig, OUTPUT_DIR);
  })

})
