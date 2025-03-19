import { initComponents, newComponent } from '../src';
import { ComponentConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

const componentConfig: ComponentConfig = {
  id: 'e34RfF3',
  type: 'component',
  name: 'todolist',
  path: 'todo',
  components: {
    id: "section_todo",
    componentName: "section",
    properties: {
      spaceY: '3'
    },
    children: [
      {
        id: "flex-group",
        componentName: "flex",
        properties: {
          className: "group relative items-center gap-4 rounded-xl bg-card p-4 hover:shadow-lg transition-all " +
            "duration-200 border border-border/50 hover:border-border"
        },
        children: [
          {
            id: "flex-checkbox",
            componentName: "flex",
            properties: {
              className: "items-center gap-4 flex-1 min-w-0"
            },
            children: [
              {
                id: "checkbox",
                componentName: "checkbox",
                properties: {
                  className: "h-5 w-5 rounded-md border-2 transition-colors"
                },
                interactions: {
                  onCheckedChange: {
                    actionName: 'toggleTodo',
                    fnName: 'handleToggle',
                    fnCustomCode: {
                      imports: [{ namespace: 'import {useRouter} from "next/router";' }],
                      fnCode: `
  const [todos, setTodos] = useState([]);
  const router = useRouter();
  
  useEffect(() => {
    setTodos([]);
  }, []);
                      
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
                      actionCode: `
  export async function toggleTodo(id: string) {
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }
            `,

                    },
                    type: 'both'
                  }
                }
              },
              //Edit Case
              {
                id: "flex-edit",
                componentName: "flex",
                properties: {
                  variant: 'flex1',
                  className: "min-w-0"
                },
                children: [
                  {
                    id: "todo_edit_input",
                    componentName: "input",
                    properties: {

                    },
                    interactions: {
                      value: {
                        fnName: "editValue",
                        fnCustomCode: {
                          fnCode: `
  const [editingId, setEditingId] = useState<string | null>(null);
`
                        },
                        type: "function"
                      },
                      onChange: {
                        fnName: "setEditValue",
                        fnCustomCode: {
                          fnCode: "const [editValue, setEditValue] = useState('');"
                        },
                        type: "function"
                      },
                      onKeyDown: {
                        fnCustomSet: `
                        (e) => {
                          if (e.key === 'Enter') handleEdit(todo.id);
                          if (e.key === 'Escape') cancelEditing();
                        }
                        `,
                        type: "function"
                      },
                    }
                  },
                  {
                    id: 'flex_buttons',
                    componentName: 'flex',
                    properties: {
                      className: "gap-1"
                    },
                    children: [
                      {
                        id: 'check_button',
                        componentName: 'button',
                        properties: {
                          variant: "ghost",
                          size: "icon",
                          iconName: "Check",
                          className: "h-8 w-8 text-green-600 hover:text-green-700 hover:bg-green-50"
                        },
                        interactions: {
                          onClick: {
                            fnName: "handleEdit",
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
                              `
                            },
                            type: "function"
                          }
                        }
                      },
                      {
                        id: 'cancel_button',
                        componentName: 'button',
                        properties: {
                          variant: "ghost",
                          size: "icon",
                          iconName: "X",
                          className: "h-8 w-8 text-muted-foreground hover:text-muted-foreground/80"
                        },
                        interactions: {
                          onClick: {
                            fnName: "cancelEditing",
                            fnCodeBlock: {
                              fnCode: `
  const cancelEditing = () => {
    setEditingId(null);
    setEditValue('');
  };
                              `
                            },
                            type: "function"
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              // Show Case
              {
                id: "flex-show",
                componentName: "flex",
                children: [
                  {
                    id: 'paragraph-name',
                    componentName: "paragraph",
                    content: "{todo.title}",
                    properties: {
                      className: `
                      {\`text-sm font-medium truncate \${
                        todo.completed ? 'text-muted-foreground line-through' : ''
                      }\`}
                      `
                    }
                  },
                  {
                    id: 'flex-clock',
                    componentName: 'flex',
                    properties: {
                      className: "items-center gap-1 mt-1"
                    },
                    children: [
                      // TODO: icon Clock!
                      {
                        id: 'paragraph-date',
                        componentName: "paragraph",
                        content: "{format(new Date(todo.createdAt), 'MMM d, h:mm a')}",
                        properties: {
                          className: "text-xs text-muted-foreground"
                        }
                      },
                    ]
                  }
                ]
              }
            ]
          },
          // editingId !== todo.id && ...
          {
            id: 'flex-todo-actions',
            componentName: 'flex',
            properties: {
              className: "opacity-0 group-hover:opacity-100 transition-opacity absolute right-2 gap-1"
            },
            children: [
              {
                id: 'button_edit',
                componentName: 'button',
                properties: {
                  variant: 'ghost',
                  size: 'icon',
                  iconName: 'Pencil',
                  className: 'text-muted-foreground hover:text-muted-foreground/80'
                },
                interactions: {
                  onClick: {
                    fnName: 'startEditing',
                    fnCustomCode: {
                      fnCode: `
  const startEditing = (todo: Todo) => {
    setEditingId(todo.id);
    setEditValue(todo.title);
  };
`
                    },
                    type: 'function'
                  }
                }
              },
              {
                id: 'button_delete',
                componentName: 'button',
                properties: {
                  variant: 'ghost',
                  size: 'icon',
                  iconName: 'Trash2',
                  className: 'text-destructive hover:text-destructive hover:bg-destructive/10'
                },
                interactions: {
                  onClick: {
                    fnName: 'handleDelete',
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
`
                    },
                    type: 'function'
                  }
                }
              }
            ]
          }
        ]
      }
    ]
  }
};

beforeAll(async () => {
  await initComponents();
});

describe('Component module',() =>{
  it('should save the component configuration file', async()=> {
    await newComponent(componentConfig, OUTPUT_DIR);
  })

})
