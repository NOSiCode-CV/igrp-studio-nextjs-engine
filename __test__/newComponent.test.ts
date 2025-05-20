import { initComponents, newComponent } from '../src';
import { ComponentConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

const componentConfig: ComponentConfig = {
  id: 'e34RfF3',
  type: 'component',
  name: 'todolist',
  path: 'todo',
  args: [
    {
      name: '{ initialTodos }',
      type: '{ initialTodos: any[] }',
    },
  ],
  components: {
    id: 'section_todo',
    tag: 'section_todo',
    componentName: 'section',
    properties: {
      spaceY: '3',
    },
    interactions: {
      custom: {
        function: {
          fnCustomCode: {
            imports: [
              { namespace: 'import {useRouter} from "next/navigation";' },
            ],
            states: [
              { state: `const [todos, setTodos] = useState([]);` }
            ],
            fnCode: `
  const router = useRouter();
  
  type Todo = {
    id: string;
    title: string;
    completed: boolean;
    createdAt: Date;
  };
  
  useEffect(() => {
    setTodos(initialTodos);
  }, [initialTodos]);
              `,
          },
        },
        type: 'function'
      }
    },
    children: [
      {
        id: 'dynamic-list',
        tag: 'dynamic-list',
        componentName: 'repetitiveList',
        properties: {
          data: 'todos',
          variable: 'todo',
          keyExtractor: '(todo) => todo.id',
        },
        children: [
          {
            id: 'flex-group',
            tag: 'flex-group',
            componentName: 'flex',
            properties: {
              className:
                'group relative items-center gap-4 rounded-xl bg-card p-4 hover:shadow-lg transition-all ' +
                'duration-200 border border-border/50 hover:border-border',
            },
            children: [
              {
                id: 'flex-checkbox',
                tag: 'flex-checkbox',
                componentName: 'flex',
                properties: {
                  className: 'items-center gap-4 flex-1 min-w-0',
                },
                children: [
                  {
                    id: 'checkbox',
                    tag: 'checkbox',
                    componentName: 'checkbox',
                    properties: {
                      className: 'h-5 w-5 rounded-md border-2 transition-colors',
                    },
                    interactions: {
                      checked: {
                        function: {
                          fnCustomSet: 'todo.completed',
                        },
                        type: 'function'
                      },
                      onCheckedChange: {
                        function: {
                          fnCustomSet: '() => handleToggle(todo.id, todo.title)',
                          fnCustomCode: {
                            imports: [
                              { namespace: 'import {toast} from "sonner";' },
                            ],
                            fnCode: `
                      
  const handleToggle = async (id: string, title: string) => {
    const todo = todos.find(t => t.id === id);
    if (!todo) return;
    
    const newStatus = !todo.completed;
    await toggleTodo(id);
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: newStatus } : todo
    ));
    router.refresh();
    
    toast.success(
      newStatus 
        ? \`Completed: \${title}\`
        : \`Unmarked: \${title}\`,
      {
        icon: newStatus ? "✅" : "↩️"
      }
    );
  };
            `,
                          }
                        },
                        action: {
                          actionName: 'toggleTodo',
                          actionCustomCode: {
                            actionCode: `

  import { getTodos, setTodos } from "@/app/pages/todolist/actions/gettodos";

  export async function toggleTodo(id: string) {
    const todos = await getTodos();
    await setTodos(
        todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
    );
  }
            `,
                          },
                        },
                        type: 'both',
                      },
                    },
                  },
                  //Edit Case
                  {
                    id: 'flex-edit',
                    tag: 'flex-edit',
                    componentName: 'section',
                    properties: {
                      className: 'flex-1 min-w-0',
                    },
                    content: `
                    {editingId === todo.id ? (
                        <div className="flex items-center  gap-2  "   >
                          <IGRPInputText
                              placeholder="Add a new task..."
                              autoFocus={ true }
                              className="h-8"
                              value={ editValue }
                              onChange={ (e) => setEditValue(e.target.value) }
                              onKeyDown={
                                (e) => {
                                  if (e.key === 'Enter') handleEdit(todo.id);
                                  if (e.key === 'Escape') cancelEditing();
                                }
                              }
                          />
                          <div className="flex   gap-1  "   >
                            <IGRPButton
                                variant="ghost"
                                size="icon"
                                iconName="Check"
                                className="h-8 w-8 text-green-600 hover:text-green-700 hover:bg-green-50"
                                onClick={ () => handleEdit(todo.id) }
                            >
                            </IGRPButton>

                            <IGRPButton
                                variant="ghost"
                                size="icon"
                                iconName="X"
                                className="h-8 w-8 text-muted-foreground hover:text-muted-foreground/80"
                                onClick={ cancelEditing }
                            >
                            </IGRPButton>
                          </div></div>): (
                        <>
                        <p className=
                               {\`text-sm font-medium truncate \${
                      todo.completed ? 'text-muted-foreground line-through' : ''
                    }\`}
                        >
                          {todo.title}</p>
                        <div className="flex   items-center gap-1 mt-1  "   >
                          <IGRPIcon
                              iconName="Clock"
                              className="h-3 w-3 text-muted-foreground"
                          />
                          <p className="   text-xs text-muted-foreground  "   >
                            {format(new Date(todo.createdAt), 'MMM d, h:mm a')}
                          </p>
                        </div>
                    </>)}
                    `,
                    interactions: {
                      value: {
                        function: {
                          fnName: 'editValue',
                          fnCustomCode: {
                            states: [
                              { state: `const [editingId, setEditingId] = useState<string | null>(null);`}
                            ],
                          },
                        },
                        type: 'function',
                      },
                      onChange: {
                        function: {
                          fnCustomSet: '(e) => setEditValue(e.target.value)',
                          fnCustomCode: {
                            states: [{ state: `const [editValue, setEditValue] = useState('');` }],
                          },
                        },
                        type: 'function',
                      },
                      onKeyDown: {
                        function: {
                          fnCustomCode: {
                            imports: [ { namespace: 'import { IGRPInputText } from "@igrp/igrp-framework-react-design-system";'}],
                          },
                          fnCustomSet: `
                        (e) => {
                          if (e.key === 'Enter') handleEdit(todo.id);
                          if (e.key === 'Escape') cancelEditing();
                        }
                        `,
                        },
                        type: 'function',
                      },
                      onClickEdit: {
                        function: {
                          fnCustomSet: '() => handleEdit(todo.id)',
                          fnCustomCode: {
                            fnCode: `
  const handleEdit = async (id: string) => {
    if (!editValue.trim()) {
      return cancelEditing();
    }

    const updatedTodo = await editTodo(id, editValue.trim());
    if (updatedTodo) {
      setTodos(todos.map((todo) =>
        todo.id === id ? { ...todo, title: editValue.trim() } : todo
      ));
      toast.success(\`Updated: \${editValue.trim()}\`, {
        icon: "✏️"
      });
    }
    
    setEditingId(null);
    setEditValue('');
    router.refresh();
  };
                              `,
                          }
                        },
                        action: {
                          actionName: 'editTodo',
                          actionCustomCode: {
                            actionCode: `
                              

  import { getTodos, setTodos } from "@/app/pages/todolist/actions/gettodos";

  export async function editTodo(id: string, title: string) {
    const todos = await getTodos();
    await setTodos(
        todos.map((todo) =>
            todo.id === id ? { ...todo, title } : todo)
    );
    return todos.find(todo => todo.id === id);
  }                           
                              `,
                          },
                        },
                        type: 'both',
                      },
                      onClickCancel: {
                        function: {
                          fnName: 'cancelEditing',
                          fnCustomCode: {
                            fnCode: `
  const cancelEditing = () => {
    setEditingId(null);
    setEditValue('');
  };
                              `,
                          }
                        },
                        type: 'function',
                      },
                      custom: {
                        function: {
                          fnCustomCode: {
                            imports: [
                              { namespace: "import { format } from 'date-fns';" },
                            ],
                          },
                        },
                        type: 'function',
                      },
                    },
                  }
                ],
              },
              // editingId !== todo.id && ...
              {
                id: 'fragment-todo-actions',
                tag: 'fragment-todo-actions',
                componentName: 'fragment',
                properties: {

                },
                content: `
                    {editingId !== todo.id && (
                      <div className="flex   opacity-0 group-hover:opacity-100 transition-opacity absolute right-2 gap-1  "   >
                      <IGRPButton
                      variant="ghost"
                      size="icon"
                      iconName="Pencil"
                      className="text-muted-foreground hover:text-muted-foreground/80"
                      onClick={ () => startEditing(todo) }
                  >
                  </IGRPButton>

                  <IGRPButton
                      variant="ghost"
                      size="icon"
                      iconName="Trash2"
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      onClick={ () => handleDelete(todo.id, todo.title) }
                  >
                  </IGRPButton>
                </div>)}            
                `,
                interactions: {
                  onClickEdit: {
                    function: {
                      fnCustomSet: '() => startEditing(todo)',
                      fnCustomCode: {
                        imports: [
                          { namespace: 'import { IGRPButton } from "@igrp/igrp-framework-react-design-system";'},
                          { namespace: 'import { IGRPIcon } from "@igrp/igrp-framework-react-design-system";'}
                        ],
                        fnCode: `
  const startEditing = (todo: Todo) => {
    setEditingId(todo.id);
    setEditValue(todo.title);
  };
`,
                      },
                    },
                    type: 'function',
                  },
                  onClickDelete: {
                    actionName: 'deleteTodo',
                    fnCustomSet: '() => handleDelete(todo.id, todo.title)',
                    fnCustomCode: {
                      fnCode: `
  const handleDelete = async (id: string, title: string) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
    router.refresh();
    
    toast.success(\`Deleted: \${title}\`, {
      icon: "🗑️"
    });
  };
`,
                      actionCode: `
                      

  import { getTodos, setTodos } from "@/app/pages/todolist/actions/gettodos";    
                       
                      
  export async function deleteTodo(id: string) {
     const todos = await getTodos();
     await setTodos(
       todos.filter((todo) => todo.id !== id)
     );
  }                     
                      `,
                    },
                    type: 'both',
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  },
};

beforeAll(async () => {
  await initComponents();
});

describe('Component module',() =>{
  it('should save the component configuration file', async()=> {
    await newComponent(componentConfig, OUTPUT_DIR);
  })

})
