import { initCodeSnippets, initComponents, newPage } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST2 } from '../src/utils/testPath';

export const OUTPUT_DIR = OUTPUT_TEST2;

const dashboardLayout: Layout = {
  id: 'grid_dashboard',
  tag: 'grid_dashboard',
  componentName: 'grid',
  properties: {
    variant: 'cols2',
    className: 'border rounded-lg',
    padding: '4',
  },
  children: [
    {
      id: 'flex_sidebar',
      tag: 'flex_sidebar',
      componentName: 'flex',
      properties: {
        variant: 'col',
        className: 'border-r',
        width: '1/4',
        padding: '4',
      },
      children: [
        {
          id: 'card_profile',
          tag: 'card_profile',
          componentName: 'card',
          properties: {
            variant: 'bordered',
          },
        },
      ],
    },
    {
      id: 'container_main',
      tag: 'container_main',
      componentName: 'container',
      properties: {
        variant: 'default',
      },
      children: [
        {
          id: 'section_content',
          tag: 'section_content',
          componentName: 'section',
          properties: {
            className: 'bg-gray-100 rounded-lg',
            padding: '6',
          },
        },
        {
          id: 'label_field',
          tag: 'label_field',
          componentName: 'label',
          content: 'Name',
        },
        {
          id: 'input_field',
          tag: 'input_field',
          componentName: 'input',
          properties: {
            placeholder: 'Enter the name',
          },
        },
        {
          id: 'checkbox_1',
          tag: 'checkbox_1',
          componentName: 'checkbox',
        },
        {
          id: 'button_submit',
          tag: 'button_submit',
          componentName: 'button',
          content: 'Submit',
          interactions: {
            onClick: {
              formSubmit: {
                targetForm: 'form1',
              },
            },
          },
        },
      ],
    },
  ],
};

const pageConfig: PageConfig = {
  'id': 'qfjxyks2qu',
  'type': 'page',
  'path': 'listacontibuiente',
  'components': {
    'id': 'page_zuvuk4',
    'componentName': 'page',
    'label': 'page',
    'properties': {
      'variant': 'default',
      'commonProperties': {},
    },
    'children': [
      {
        'id': 'section_ctc4mc',
        'componentName': 'section',
        'label': 'section',
        'properties': {
          'variant': 'compact',
          'spaceX': '3',
          'spaceY': '3',
          'commonProperties': {},
        },
        'children': [
          {
            'id': 'pageheader_sbryx6',
            'tag': 'pageHeader1',
            'componentName': 'pageHeader',
            'label': 'Page Header',
            'type': 'group',
            'children': [],
            'interactions': {},
            'allowTypes': false,
            'data': {},
            'properties': {
              'title': 'Lista de Contribuiente',
              'description': 'Page Description',
              'variant': 'h3',
              'commonProperties': {},
            },
            'childProperties': {},
          },
          {
            'id': 'table_3gpn4x',
            'tag': 'table1',
            'componentName': 'table',
            'label': 'Table',
            'type': 'group',
            'children': [
              {
                'id': 'tablecolumns_j5tw2i',
                'tag': 'tableColumns1',
                'componentName': 'tableColumns',
                'label': 'Table Column',
                'children': [
                  {
                    'id': 'tableactionlistcell_54zgyi',
                    'tag': 'tableActionListCell1',
                    'componentName': 'tableActionListCell',
                    'label': 'Actions Column',
                    'type': '',
                    'children': [
                      {
                        'id': 'tablealertaction_mfe1to',
                        'tag': 'tableAlertAction1',
                        'componentName': 'tableAlertAction',
                        'label': 'Alert Action',
                        'type': '',
                        'children': [],
                        'interactions': {
                          'onClickConfirm': '(e) => handle{{id}}Click(e)',
                        },
                        'allowTypes': false,
                        'data': {},
                        'properties': {
                          'labelTrigger': 'Alert',
                          'icon': 'ArrowRight',
                          'variant': 'default',
                          'type': 'alert',
                          'title': 'New Alert',
                          'showCancel': true,
                          'labelCancel': 'Cancel',
                          'variantCancel': 'default',
                          'showConfirm': true,
                          'labelConfirm': 'Confirm',
                          'variantConfirm': 'default',
                          'commonProperties': {},
                        },
                      },
                      {
                        'id': 'tablemodalaction_24lxqn',
                        'tag': 'tableModalAction1',
                        'componentName': 'tableModalAction',
                        'label': 'Modal Action',
                        'type': '',
                        'children': [],
                        'interactions': {
                          'onClickConfirm': '(e) => handle{{id}}Click(e)',
                        },
                        'allowTypes': false,
                        'data': {},
                        'properties': {
                          'labelTrigger': 'Modal',
                          'icon': 'ArrowRight',
                          'variant': 'default',
                          'type': 'modal',
                          'title': 'New Modal',
                          'showCancel': true,
                          'labelCancel': 'Cancel',
                          'variantCancel': 'default',
                          'showConfirm': true,
                          'labelConfirm': 'Confirm',
                          'variantConfirm': 'default',
                          'commonProperties': {},
                        },
                      },
                      {
                        'id': 'tabledropdownmenucell_1qbkai',
                        'tag': 'tableDropdownMenuCell1',
                        'componentName': 'tableDropdownMenuCell',
                        'label': 'Dropdown Column',
                        'type': '',
                        'children': [],
                        'interactions': {},
                        'allowTypes': false,
                        'data': {},
                        'properties': {
                          'labelTrigger': 'Dropdown Actions',
                          'icon': 'ArrowRight',
                          'variant': 'default',
                          'commonProperties': {},
                        },
                      },
                      {
                        'id': 'tabledropdownmenucell_p2t88g',
                        'tag': 'tableDropdownMenuCell2',
                        'componentName': 'tableDropdownMenuCell',
                        'label': 'Dropdown Column',
                        'type': '',
                        'children': [],
                        'interactions': {},
                        'allowTypes': false,
                        'data': {},
                        'properties': {
                          'labelTrigger': 'Dropdown Actions',
                          'icon': 'ArrowRight',
                          'variant': 'default',
                          'commonProperties': {},
                        },
                      },
                    ],
                    'interactions': {},
                    'allowTypes': false,
                    'data': {},
                    'properties': {
                      'headerTitle': 'Actions Column',
                      'type': 'inline',
                      'commonProperties': {},
                    },
                    'childProperties': {},
                  },
                  {
                    'id': 'tabletextcell_jdqrw2',
                    'tag': 'tableTextCell1',
                    'componentName': 'tableTextCell',
                    'label': 'Text Column',
                    'type': '',
                    'children': [],
                    'interactions': {},
                    'allowTypes': false,
                    'data': {},
                    'properties': {
                      'headerTitle': 'Text Column',
                      'dataProperties': {
                        'isVirtual': false,
                        'isType': true,
                      },
                      'variant': 'default',
                      'commonProperties': {},
                    },
                  },
                ],
                'interactions': {},
                'allowTypes': false,
                'data': {},
                'properties': {
                  'commonProperties': {},
                },
                'childProperties': {},
              },
              {
                'id': 'tablefilters_wwrr3x',
                'tag': 'tableFilters1',
                'componentName': 'tableFilters',
                'label': 'Table Filter',
                'children': [
                  {
                    'id': 'tableinputfilter_cdtw2v',
                    'tag': 'tableInputFilter1',
                    'componentName': 'tableInputFilter',
                    'label': 'Input Filter',
                    'type': '',
                    'children': [],
                    'interactions': {},
                    'allowTypes': false,
                    'data': {},
                    'properties': {
                      'columnId': '{{id}}',
                      'commonProperties': {},
                    },
                    'childProperties': {},
                  },
                ],
                'interactions': {},
                'allowTypes': false,
                'data': {},
                'properties': {
                  'commonProperties': {},
                },
              },
            ],
            'interactions': {},
            'allowTypes': true,
            'data': {
              'data': {
                'state': {
                  'id': '',
                  'type': 'any',
                  'name': 'contentTabletable1',
                  'defaultValue': '[]',
                  'imports': [],
                },
              },
            },
            'properties': {
              'data': [],
              'showFilter': false,
              'showPagination': false,
              'showToggleColumn': false,
              'isNumericPagination': false,
              'isServerSide': false,
              'commonProperties': {},
            },
            'dataType': 'table1',
          },
        ],
        'tag': 'section2',
        'data': {},
        'interactions': {},
      },
    ],
    'tag': 'page2',
    'data': {},
    'interactions': {
      'onLoad': {
        'type': 'function',
        'function': {
          'fnCustomCode': {
            'imports': [
              {
                'namespace': 'import {loadPageList} from \'@/app/(myapp)/functions/page-service\'',
                'id': 'i4vyhy1s3m',
              },
            ],
            'fnCode': '  // begin fnCode Carrega os dados quando o componente monta\n  useEffect(() => {\n    const loadData = async () => {\n      await loadPageList({\n        setContentTabletable1\n      });\n    };\n\n    loadData();\n  }, []);\n  //end',
          },
        },
      },
    },
    'childProperties': {},
  },
  'functions': [],
  'types': [
    {
      'componentId': 'table_3gpn4x',
      'name': 'table1',
      'path': '',
      'fields': [
        {
          'componentId': 'tabletextcell_jdqrw2',
          'name': 'tableTextCell1',
          'type': 'string',
          'required': false,
          'validation': '',
          'defaultValue': '',
        },
      ],
    },
  ],
  'states': [],
  'imports': [],
  'pageName': 'ListaContibuiente',
};

beforeAll(async () => {
  await initComponents();
  await initCodeSnippets();
});

describe('Page module', () => {
  it('should save the page configuration file', async () => {
    await newPage(pageConfig, OUTPUT_DIR);
  });
});
