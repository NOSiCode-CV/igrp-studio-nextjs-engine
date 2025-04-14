import { initComponents, newPage } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';
//import { inputLayout } from "./newInputPage.test";

export const OUTPUT_DIR = OUTPUT_TEST;

const tableLayout: Layout = {
  id: 'section_tables',
  componentName: 'section',
  properties: {
    variant: 'compact',
    spaceY: '6'
  },
  children: [
    {
      id: 'headline',
      componentName: 'headline',
      properties: {
        variant: 'h4',
        title: 'Table',
        description: 'A demo table component',
      }
    },
    {
      id: 'table_default',
      componentName: 'table',
      properties: {
        showFilter: true,
        showPagination: true,
        showToggleColumn: true
      },
      children: [
        {
          id: 'expand',
          componentName: 'tableColumns',
          properties: {},
          children: [
            {
              id: 'check',
              componentName: 'tableCheckboxCell',
              properties: {
                headerType: "rowsSelect"
              },
            },
            {
              id: 'expand',
              componentName: 'tableExpanderCell',
              properties: {
              }
            },
            {
              id: 'name',
              componentName: 'tableTextCell',
              properties: {
                headerTitle: "Name",
              }
            },
            {
              id: 'email',
              componentName: 'tableTextCell',
              properties: {
                headerTitle: "Email",
                headerType: "sortToggle",
              }
            },
            {
              id: 'role',
              componentName: 'tableTextCell',
              properties: {
                headerTitle: "Role",
                headerType: "sortDropdown",
              }
            },
            {
              id: 'salary',
              componentName: 'tableAmountCell',
              properties: {
                headerTitle: "Salary",
                headerType: "sortDropdown"
              }
            },
            {
              id: 'contractDate',
              componentName: 'tableDateCell',
              properties: {
                headerTitle: "Contract Date",
                headerType: "sortDropdown",
                dateFormat: "dd/MM/yyyy"
              }
            },
            {
              id: 'department',
              componentName: 'tableBadgeCell',
              properties: {
                headerTitle: 'Department',
                headerType: 'sortDropdown'
              }
            },
            {
              id: 'subRole',
              componentName: 'tableBadgeCell',
              properties: {
                headerTitle: 'Sub-Role',
                headerType: 'sortDropdown'
              }
            },
            {
              id: 'actions',
              componentName: 'tableActionListCell',
              properties: {
                type: 'inline',
                headerTitle: 'Actions'
              },
              children: [
                {
                  id: 'delete',
                  componentName: 'tableAlertAction',
                  properties: {
                    labelTrigger: 'Delete',
                    iconProperties: {
                      iconName: 'Trash',
                    },
                    title: 'Delete',
                  }
                },
                {
                  id: 'dropdown',
                  componentName: 'tableDropdownMenuCell',
                  children: [
                    {
                      id: 'disable',
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
                      componentName: 'tableModalDropdownItem',
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
          componentName: 'tableFilters',
          properties: {},
          children: [
            {
              id: 'contractDate',
              componentName: 'tableDateFilter',
              properties: {

              }
            },
            {
              id: 'subRole',
              componentName: 'tableDropdownFilter',
              properties: {
                placeholder: 'Filter by option...',
                options: [
                  { value: 'Master', label: 'Master' },
                  { value: 'Default', label: 'Default' },
                  { value: 'Temporary', label: 'Temporary' },
                ],
              }
            },
            {
              id: 'role',
              componentName: 'tableFacetedFilter',
              properties: {
                placeholder: 'Selecionar',
                options: [
                  { value: 'Admin', label: 'Admin' },
                  { value: 'User', label: 'User' },
                  { value: 'Guest', label: 'Guest' },
                ],
              }
            },
            {
              id: 'department',
              componentName: 'tableInputFilter',
              properties: {

              }
            },
            {
              id: 'salary',
              componentName: 'tableMinMaxFilter',
              properties: {

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
      ],
      interactions: {
        data: {
          fnCustomSet: 'contentTabletable_default',
          fnCustomCode: {
            states: [{ state: `const [contentTabletable_default, setContentTabletable_default] = useState<any>([]);` }],
            fnCode: `
  useEffect(() => {
    updateTabletable_default()
  },[])

  const updateTabletable_default = async () => {
    if (service.table_default && service.table_default.populate) {
      const data = (await service.table_default.populate()).rows
      setContentTabletable_default(data)
    }
  }
            `
          },
          type: 'function'
        },
      }
    },
  ],
};

const pageConfig: PageConfig = {
  id: 't21Mus9lm2m1',
  type: 'page',
  pageName: 'tables',
  path: 'tables',
  components: tableLayout,
};

beforeAll(async () => {
  await initComponents();
});

describe('Tables module',() =>{
  it('should save the table page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
