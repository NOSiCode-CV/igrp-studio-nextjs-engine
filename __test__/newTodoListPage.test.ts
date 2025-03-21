import { initComponents, newPage, registerComponents } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST;

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
                        className: 'pb-4'
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
                                iconName: 'Check'
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
                                    states: [{ state: `const [todos, setTodos] = useState<any[]>([]);` }],
                                    fnCode: `
  useEffect(() => {
    const loadTodos = async () => {
      const initialTodos = await getTodos();
      setTodos(initialTodos);
    };
    loadTodos();
  }, []);
  
  const handleAddTodo = (newTodo: any) => {
    setTodos(prevTodos => [newTodo, ...prevTodos]);
  };
                          `,
                                    actionCode: `
                          
  let todos: any[] = [];
  
  export async function getTodos() {
    return todos;
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
                        className: 'pb-4'
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

describe('Todolist module',() =>{
  it('should save the input page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
