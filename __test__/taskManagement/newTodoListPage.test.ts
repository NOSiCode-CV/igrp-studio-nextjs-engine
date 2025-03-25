import { initComponents, newPage, registerComponents } from '../../src';
import { Layout, PageConfig } from '../../src/interfaces/types';
import { OUTPUT_TODO_TEST } from '../../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TODO_TEST;

export const todoLayout: Layout = {
  id: 'main_layout',
  componentName: 'flex',
  properties: {
    className: 'min-h-screen bg-gradient-to-br from-background via-background to-muted',
  },
  children: [
    {
      id: 'hl_container',
      componentName: 'container',
      properties: {
        className: 'mx-auto sm:p-6 lg:p-8 space-y-4',
        padding: 4
      },
      interactions: {
        custom: {
          fnCustomCode: {
            imports: [
              { namespace: 'import { Todo } from "@/app/pages/todolist/actions/gettodos";' },
            ]
          },
          type: 'function'
        }
      },
      children: [
        {
          id: 'hl_title',
          componentName: 'headline',
          properties: {
            variant: 'h1',
            title: 'Task Management Assistant'
          }
        },
        {
          id: 'main_grid',
          componentName: 'grid',
          properties: {
            className: 'grid-cols-1 lg:grid-cols-2 gap-6',
          },
          children: [
            {
              id: 'flex_1',
              componentName: 'flex',
              properties: {
                variant: 'col',
                className: 'space-y-4',
              },
              children: [
                {
                  id: 'card_todo',
                  componentName: 'card',
                  properties: {
                    className: 'flex-1 border-none shadow-lg'
                  },
                  children: [
                    {
                      id: 'card_todo_header',
                      componentName: 'cardHeader',
                      properties: {
                      },
                      children: [
                        {
                          id: 'todo_hl_flex',
                          componentName: 'flex',
                          properties: {
                            className: "items-center space-x-2"
                          },
                          children: [
                            {
                              id: 'check_icon',
                              componentName: 'icon',
                              properties: {
                                iconName: 'SquareCheck'
                              }
                            },
                            {
                              id: 'hl_tasks',
                              componentName: 'headline',
                              properties: {
                                variant: 'h4',
                                title: 'Tasks'
                              }
                            },
                          ]
                        },
                      ]
                    },
                    {
                      id: 'card_todo_content',
                      componentName: 'cardContent',
                      properties: {

                      },
                      children: [
                        {
                          id: 'section_todo',
                          componentName: 'section',
                          properties: {
                            spaceY: '4'
                          },
                          children: [
                            {
                              id: 'addTodo',
                              componentName: 'addTodo',
                              properties: {
                                customProperties: {
                                  onAdd: '{handleAddTodo}'
                                }
                              },
                              interactions: {
                                custom: {
                                  fnName: 'handleAddTodo',
                                  actionName: 'getTodos',
                                  fnCustomCode: {
                                    states: [{ state: `const [todos, setTodos] = useState<Todo[]>([]);` }],
                                    fnCode: `
  useEffect(() => {
    const loadTodos = async () => {
      const initialTodos = await getTodos();
      setTodos(initialTodos);
    };
    loadTodos();
  }, []);
  
  const handleAddTodo = (newTodo: Todo) => {
    setTodos(prevTodos => [newTodo, ...prevTodos]);
  };
                          `,
                                    actionCode: `
  export type Todo = {
    id: string;
    title: string;
    completed: boolean;
    createdAt: Date;
  };
                          
  const todoStore = {
    todos: [] as Todo[],
  };

  /**
   * Fetches tasks from the backend API and maps them to the Todo interface.
   */
  export async function getTodos(): Promise<Todo[]> {
      try {
          const response = await fetch("http://localhost:8080/tasks");
          if (!response.ok) {
              throw new Error("Failed to fetch tasks");
          }
  
          const data = await response.json();
  
          // Convert API response to match the Todo interface
          const todos: Todo[] = data.content.map((task: any) => ({
              id: String(task.id), // Ensure ID is a string
              title: task.title,
              completed: task.status === "COMPLETED",
              createdAt: new Date(task.date),
          }));
  
          // Update store
          todoStore.todos = todos;
  
          return todos;
      } catch (error) {
          console.error("Error fetching todos:", error);
          return [];
      }
  }
  
  /**
   * Updates the local todo store.
   */
  export async function setTodos(updatedTodos: Todo[]) {
      todoStore.todos = updatedTodos;
  }

                          `
                                  },
                                  type: 'both'
                                },

                              }
                            },
                            {
                              id: 'flex-todolist',
                              componentName: 'section',
                              properties: {
                                className: "h-[calc(100vh-320px)] overflow-auto pr-2"
                              },
                              children: [
                                {
                                  id: 'todolist',
                                  componentName: 'todolist',
                                  properties: {
                                    customProperties: {
                                      initialTodos: '{todos}'
                                    }
                                  },
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ],
                },
              ],
            },
            {
              id: 'flex_2',
              componentName: 'flex',
              properties: {
                variant: 'col',
                className: 'space-y-4',
              },
              children: [
                {
                  id: 'card_chat',
                  componentName: 'card',
                  properties: {
                    className: 'flex-1 border-none shadow-lg'
                  },
                  children: [
                    {
                      id: 'card_chat_header',
                      componentName: 'cardHeader',
                      properties: {
                      },
                      children: [
                        {
                          id: 'ai_chat_hl_flex',
                          componentName: 'flex',
                          properties: {
                            className: "items-center space-x-2"
                          },
                          children: [
                            {
                              id: 'message_icon',
                              componentName: 'icon',
                              properties: {
                                iconName: 'MessageSquare'
                              }
                            },
                            {
                              id: 'hl_ai_assistant',
                              componentName: 'headline',
                              properties: {
                                variant: 'h4',
                                title: 'AI Assistant'
                              }
                            },
                          ]
                        },
                      ]
                    },
                    {
                      id: 'card_chat_content',
                      componentName: 'cardContent',
                      properties: {
                        className: 'h-[calc(100vh-240px)]'
                      },
                      children: [
                        {
                          id: 'ai_chat',
                          componentName: 'chat',
                          properties: {
                            apiEndpoint: "http://localhost:8080/chat",
                          }
                        }
                      ]
                    }
                  ]
                }
              ],
            }
          ],
        }
      ],
    }
  ],
};

const pageConfig: PageConfig = {
  id: 'i76Typ9lm2m1',
  type: 'page',
  pageName: 'todolist',
  path: 'todolist',
  components: todoLayout,
};

beforeAll(async () => {
  await initComponents();
  registerComponents({
    components: [
      {
        name: "todolist",
        imports: [`import Todolist from "@/components/todolist/todolist"`],
        group: "custom",
        label: "Todolist",
        customComponentTag: "Todolist",
        customClassName: "",
        states: [],
        renderer: 'custom',
        defaultValue: false,
        variants: {},
        properties: {},
        propertiesMapping: {},
        childrenTypes: [],
        acceptedChildren: []
      },
      {
        name: "addTodo",
        customClassName: "",
        imports: [`import AddTodo from "@/components/addtodo/addtodo"`],
        group: "custom",
        label: "Add Todo",
        customComponentTag: "AddTodo",
        states: [],
        renderer: 'custom',
        defaultValue: false,
        variants: {},
        properties: {},
        propertiesMapping: {},
        childrenTypes: [],
        acceptedChildren: []
      }
    ]
  })
});

describe('Todolist Page module',() =>{
  it('should save the input page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
