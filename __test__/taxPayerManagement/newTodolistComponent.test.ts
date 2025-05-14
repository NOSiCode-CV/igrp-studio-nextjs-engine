import { initComponents, newComponent } from '../../src';
import { ComponentConfig } from '../../src/interfaces/types';
import { OUTPUT_TODO_TEST } from '../../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TODO_TEST;

const componentConfig: ComponentConfig = {
  id: 'e34RfF3',
  type: 'component',
  name: 'todolist',
  path: 'todo',
  args: [
    {
      name: '{ initialTodos }',
      type: '{ initialTodos: Todo[] }',
    },
  ],
  components: {
    id: 'section_todo',
    componentName: 'section',
    properties: {
      spaceY: '3',
    },
    interactions: {
      custom: {
        fnCustomCode: {
          imports: [
            { namespace: 'import {useRouter} from "next/navigation";' },
            { namespace: 'import { Todo } from "@/app/pages/todolist/actions/gettodos";' },
          ],
          states: [
            { state: `const [todos, setTodos] = useState<Todo[]>([]);` }
          ],
          fnCode: `
  const router = useRouter();
  
  useEffect(() => {
    setTodos(initialTodos);
  }, [initialTodos]);
              `,
        },
        type: 'function'
      }
    },
    children: [
      {
        id: 'dynamic-list',
        componentName: 'repetitiveList',
        properties: {
          data: 'todos',
          variable: 'todo',
          keyExtractor: '(todo) => todo.id',
        },
        children: [
          {
            id: 'flex-group',
            componentName: 'flex',
            properties: {
              className:
                'group relative items-center gap-4 rounded-xl bg-card p-4 hover:shadow-lg transition-all ' +
                'duration-200 border border-border/50 hover:border-border',
            },
            children: [
              {
                id: 'flex-checkbox',
                componentName: 'flex',
                properties: {
                  className: 'items-center gap-4 flex-1 min-w-0',
                },
                children: [
                  {
                    id: 'checkbox',
                    componentName: 'checkbox',
                    properties: {
                      className: 'h-5 w-5 rounded-md border-2 transition-colors',
                    },
                    interactions: {
                      checked: {
                        fnCustomSet: 'todo.completed',
                        type: 'function'
                      },
                      onCheckedChange: {
                        actionName: 'toggleTodo',
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
                          actionCode: `

  import { getTodos, setTodos } from "@/app/pages/todolist/actions/gettodos";

  export async function toggleTodo(id: string) {
    const todos = await getTodos();
    const todo = todos.find(t => t.id === id);
    if (!todo) return;

    const updatedTodo = { ...todo, completed: !todo.completed };

    // Make a POST request to update the task status
    await fetch(\`http://localhost:8080/tasks/\${id}\`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodo),
    });

    await setTodos(
        todos.map((t) => (t.id === id ? updatedTodo : t))
    );
  }
            `,
                        },
                        type: 'both',
                      },
                    },
                  },
                  //Edit Case
                  {
                    id: 'flex-edit',
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
                        fnName: 'editValue',
                        fnCustomCode: {
                          states: [
                            { state: `const [editingId, setEditingId] = useState<string | null>(null);`}
                          ],
                        },
                        type: 'function',
                      },
                      onChange: {
                        fnCustomSet: '(e) => setEditValue(e.target.value)',
                        fnCustomCode: {
                          states: [{ state: `const [editValue, setEditValue] = useState('');` }],
                        },
                        type: 'function',
                      },
                      onKeyDown: {
                        fnCustomCode: {
                          imports: [ { namespace: 'import { IGRPInputText } from "@igrp/igrp-framework-react-design-system";'}],
                        },
                        fnCustomSet: `
                        (e) => {
                          if (e.key === 'Enter') handleEdit(todo.id);
                          if (e.key === 'Escape') cancelEditing();
                        }
                        `,
                        type: 'function',
                      },
                      onClickEdit: {
                        fnCustomSet: '() => handleEdit(todo.id)',
                        actionName: 'editTodo',
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
                          actionCode: `
                              
  import { getTodos, setTodos } from "@/app/pages/todolist/actions/gettodos";

  export async function editTodo(id: string, title: string) {
    const updatedTodo = { title, description: "" };

    // Make a PUT request to update the task title
    const response = await fetch(\`http://localhost:8080/tasks/\${id}\`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodo),
    });

    if (!response.ok) {
        console.error("Failed to update the task");
        return null;
    }

    const todos = await getTodos();
    await setTodos(
        todos.map((todo) => (todo.id === id ? { ...todo, title } : todo))
    );

    return todos.find(todo => todo.id === id);
  }
                           
                              `,
                        },
                        type: 'both',
                      },
                      onClickCancel: {
                        fnName: 'cancelEditing',
                        fnCustomCode: {
                          fnCode: `
  const cancelEditing = () => {
    setEditingId(null);
    setEditValue('');
  };
                              `,
                        },
                        type: 'function',
                      },
                      custom: {
                        fnCustomCode: {
                          imports: [
                            { namespace: "import { format } from 'date-fns';" },
                          ],
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
    // Make a DELETE request to remove the task from the backend
    const response = await fetch(\`http://localhost:8080/tasks/\${id}\`, {
        method: "DELETE",
    });

    if (!response.ok) {
        console.error("Failed to delete the task");
        return;
    }

    const todos = await getTodos();
    await setTodos(todos.filter((todo) => todo.id !== id));
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

describe('Todolist Component module',() =>{
  it('should save the component configuration file', async()=> {
    await newComponent(componentConfig, OUTPUT_DIR);
  })

})
