import { initComponents, newPage, setEngineConfiguration } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';
//import { inputLayout } from "./newInputPage.test";

export const OUTPUT_DIR = OUTPUT_TEST;

const tableLayout: Layout = {
  id: 'section_tables',
  tag: 'section_tables',
  componentName: 'section',
  properties: {
    variant: 'compact',
    spaceY: '6'
  },
  children: [
    {
      id: 'headline',
      tag: 'headline',
      componentName: 'headline',
      properties: {
        variant: 'h4',
        title: 'Table',
        description: 'A demo table component',
      }
    },
    {
      id: 'table_default',
      tag: 'table_default',
      componentName: 'table',
      properties: {
        showFilter: true,
        showPagination: true,
        showToggleColumn: true
      },
      children: [
        {
          id: 'table_default_columns',
          tag: 'table_default_columns',
          componentName: 'tableColumns',
          properties: {},
          children: [
            {
              id: 'check',
              tag: 'check',
              componentName: 'tableCheckboxCell',
              properties: {
                headerType: "rowsSelect"
              },
            },
            {
              id: 'expand',
              tag: 'expand',
              componentName: 'tableExpanderCell',
              properties: {
              }
            },
            {
              id: 'name',
              tag: 'name',
              componentName: 'tableTextCell',
              properties: {
                headerTitle: "Name",
              }
            },
            {
              id: 'email',
              tag: 'email',
              componentName: 'tableTextCell',
              properties: {
                headerTitle: "Email",
                headerType: "sortToggle",
              }
            },
            {
              id: 'role_text',
              tag: 'role',
              componentName: 'tableTextCell',
              properties: {
                headerTitle: "Role",
                headerType: "sortDropdown",
              }
            },
            {
              id: 'salary',
              tag: 'salary',
              componentName: 'tableAmountCell',
              properties: {
                headerTitle: "Salary",
                headerType: "sortDropdown"
              }
            },
            {
              id: 'contractDate',
              tag: 'contractDate',
              componentName: 'tableDateCell',
              properties: {
                headerTitle: "Contract Date",
                headerType: "sortDropdown",
                dateFormat: "dd/MM/yyyy"
              }
            },
            {
              id: 'department',
              tag: 'department',
              componentName: 'tableBadgeCell',
              properties: {
                headerTitle: 'Department',
                headerType: 'sortDropdown'
              }
            },
            {
              id: 'subRole',
              tag: 'subRole',
              componentName: 'tableBadgeCell',
              properties: {
                headerTitle: 'Sub-Role',
                headerType: 'sortDropdown'
              }
            },
            {
              id: 'link',
              tag: 'link',
              componentName: 'tableLinkCell',
              properties: {
                headerTitle: 'Link',
                headerType: 'sortDropdown',
                href: 'https://igrp.cv/',
                target: '_blank'
              }
            },
            {
              id: 'actions',
              tag: 'actions',
              componentName: 'tableActionListCell',
              properties: {
                type: 'inline',
                headerTitle: 'Actions'
              },
              children: [
                {
                  id: 'delete',
                  tag: 'delete',
                  componentName: 'tableAlertAction',
                  properties: {
                    labelTrigger: 'Delete',
                    variant: 'destructive',
                    iconProperties: {
                      iconName: 'Trash',
                    },
                    title: 'Delete',
                  }
                },
                {
                  id: 'dropdown',
                  tag: 'dropdown',
                  componentName: 'tableDropdownMenuCell',
                  children: [
                    {
                      id: 'disable',
                      tag: 'disable',
                      componentName: 'tableAlertDropdownItem',
                      properties: {
                        iconProperties: {
                          iconName: 'Pause',
                        },
                        showIcon: true,
                        labelTrigger: 'Disable',
                        type: "alert"
                      }
                    },
                    {
                      id: 'edit',
                      tag: 'edit',
                      componentName: 'tableCustomDropdownItem',
                      properties: {
                        iconProperties: {
                          iconName: 'Pencil',
                        },
                        showIcon: true,
                        labelTrigger: 'Edit',
                        type: "modal"
                      }
                    },
                    {
                      id: 'external',
                      tag: 'external',
                      componentName: 'tableLinkDropdownItem',
                      properties: {
                        iconProperties: {
                          iconName: 'Link',
                        },
                        showIcon: true,
                        labelTrigger: 'External',
                        href: "https://igrp.cv/",
                        type: "link"
                      }
                    },
                  ]
                },
                {
                  id: 'view',
                  tag: 'view',
                  componentName: 'tableModalAction',
                  properties: {
                    labelTrigger: 'View',
                    iconProperties: {
                      iconName: 'Eye',
                    },
                    title: 'View',
                  },
                  children: [
                    //inputLayout // TODO: modal shouldn't allow hrefs??
                  ]
                },
                /*{
                  id: 'external',
                  componentName: 'tableLinkAction',
                  properties: {
                    labelTrigger: 'External',
                    iconProperties: {
                      iconName: 'ArrowRight',
                    },
                    href: 'https://www.igrp.cv/',
                  }
                },*/
              ]
            },
          ],
        },
        {
          id: 'table_default_filters',
          tag: 'table_default_filters',
          componentName: 'tableFilters',
          properties: {},
          children: [
            {
              id: 'contractDate_filter',
              tag: 'contractDate_filter',
              componentName: 'tableDateFilter',
              properties: {
                columnId: 'contractDate'
              }
            },
            {
              id: 'subRole_filter',
              tag: 'subRoleFilter',
              componentName: 'tableDropdownFilter',
              properties: {
                columnId: 'subRole',
                placeholder: 'Filter by option...',
              },
              data: {
                options: {
                  state: {
                    id: 'state_filter_1',
                    name: 'dropdownFiltersubRoleFilterOptions',
                    type: 'IGRPOptionsProps[]',
                    defaultValue: '[]',
                    generate: true
                  },
                }
              },
            },
            {
              id: 'role_filter',
              tag: 'roleFilter',
              componentName: 'tableFacetedFilter',
              properties: {
                columnId: 'role',
                placeholder: 'Selecionar',
              },
              data: {
                options: {
                  state: {
                    id: 'state_filter_2',
                    name: 'dropdownFilterroleFilterOptions',
                    type: 'IGRPOptionsProps[]',
                    defaultValue: '[]',
                    generate: true
                  },
                }
              },
            },
            {
              id: 'department_filter',
              tag: 'department_filter',
              componentName: 'tableInputFilter',
              properties: {
                columnId: 'department'
              }
            },
            {
              id: 'salary_filter',
              tag: 'salary_filter',
              componentName: 'tableMinMaxFilter',
              properties: {
                columnId: 'salary'
              }
            },
            /*{
              id: 'role',
              componentName: 'tableSelectFilter',
              properties: {
                placeholder: 'Filter by option...',
                options: [
                  { value: 'Admin', label: 'Admin' },
                  { value: 'User', label: 'User' },
                  { value: 'Guest', label: 'Guest' },
                ],
              }
            },*/
          ],
        },
        {
          id: 'table_default_row_subcomponent',
          tag: 'table_default_row_subcomponent',
          componentName: 'tableRowSubcomponent',
          properties: {
            rule: 'rowData.role === "Admin"'
          },
          children: [
            {
              id: 'sub_headline',
              tag: 'sub_headline',
              componentName: 'headline',
              properties: {
                variant: 'h4',
                title: 'Details',
                description: 'Row details here',
              }
            }
          ]
        }

      ],
      interactions: {
        data: {
          function: {
            fnCustomSet: 'contentTabletable_default',
            fnCustomCode: {
              states: [
                {
                  id: 'table_default_content_st',
                  name: 'contentTabletable_default',
                  type: 'any',
                  defaultValue: '[]',
                  isArray: true
                }
              ],
              fnCode: `
  useEffect(() => {
    loadsubRoleFilterFilterOptions()
    loadroleFilterFilterOptions()
    updateTabletable_default()
  },[])

  const loadsubRoleFilterFilterOptions = () => {
    setDropdownFiltersubRoleFilterOptions([
      { value: 'Master', label: 'Master' },
      { value: 'Default', label: 'Default' },
      { value: 'Temporary', label: 'Temporary' },
    ])
  }
  
  const loadroleFilterFilterOptions = () => {
    setDropdownFilterroleFilterOptions([
      { value: 'Admin', label: 'Admin' },
      { value: 'User', label: 'User' },
      { value: 'Guest', label: 'Guest' },
    ])
  }

  const updateTabletable_default = async () => {
      const data = [
        {
          name: 'John Doe',
          email: 'john@example.com',
          role: 'Admin',
          salary: 220000,
          contractDate: '01/01/2025',
          department: 'Administration',
          subRole: 'Master',
          link: 'https://igrp.cv/'
        },
        {
          name: 'Jane Smith',
          email: 'jane@example.com',
          role: 'User',
          salary: 40000,
          contractDate: '01/02/2025',
          department: 'HR',
          subRole: 'Default',
          link: 'https://nosi.cv/'
        },
        {
          name: 'Bob Johnson',
          email: 'bob@example.com',
          role: 'Guest',
          salary: 15000,
          contractDate: '01/03/2025',
          department: 'Collaborators',
          subRole: 'Temporary',
          link: 'https://google.cv/'
        },
      ]
      setContentTabletable_default(data)
    }
            `
            },
          },
          type: 'function'
        },
      }
    },

  ],
};

const pageConfig: PageConfig = {
  id: 't21Mus9lm2m1',
  types: [],
  type: 'page',
  pageName: 'tables',
  path: 'tables',
  components: tableLayout,
};

beforeAll(async () => {
  setEngineConfiguration({ environment: 'development' });
  await initComponents();
});

describe('Tables module', () => {
  it('should save the table page configuration file', async () => {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
