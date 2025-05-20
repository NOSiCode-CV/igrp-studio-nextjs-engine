import { initComponents, newPage } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';
import { baseInteraction } from '../src/components/default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../src/utils/constants';

export const OUTPUT_DIR = OUTPUT_TEST;

export const chartLayout: Layout = {
  id: 'default_section',
  tag: 'default_section',
  componentName: 'section',
  properties: {
    spaceY: 6,
  },
  children: [
    {
      id: 'grid_inputs',
      tag: 'grid_inputs',
      componentName: 'grid',
      properties: {
        variant: 'cols3',
        className: 'border rounded-lg',
        padding: '10',
        gap: '4',
      },
      childProperties: {
        //padding: '4'
      },
      children: [
        {
          id: 'chart_area',
          tag: 'chart_area',
          componentName: 'areachart',
          properties: {
            areas: [
              {
                dataKey: 'temperature',
                type: 'linear',
              },
            ],
            categoryKey: "mes",
            title: "Temperatura Média",
            description: "Janeiro - Junho 2024",
            showGrid: true,
            legendPosition: "bottom",
            tooltipIndicator: "dot",
            showReferenceZero: true,
            size: 'md',
            gridColor: "#e5e7eb",
            referenceLineColor: "#e5e7eb",
            axisColor: "#d1d5db",
            footer: {
              description: "Temperatura diminuindo com a chegada do inverno",
            },
          },
          interactions: {
            valueFormatter: {
              function: {
                fnCustomSet: "(value: number) => `${value}°C`",
              },
              type: "function"
            },
            data: {
              function: {
                fnName: 'dadosVisitantes',
                fnCustomCode: {
                  fnCode: `
  const dadosVisitantes = [
    { mes: "Jan", temperature: 420 },
    { mes: "Fev", temperature: 520 },
    { mes: "Mar", temperature: 610 },
    { mes: "Abr", temperature: 450 },
    { mes: "Mai", temperature: 480 },
    { mes: "Jun", temperature: 520 },
  ];
                `,
                },
              },
              type: "function"
            },
          }
        },
        {
          id: 'hor_chart_bar',
          tag: 'hor_chart_bar',
          componentName: 'horizontalBarchart',
          properties: {
            bars: [
              {
                dataKey: 'temperature',
                radius: 5
              },
            ],
            categoryKey: "mes",
            title: "Temperatura Média",
            description: "Janeiro - Junho 2024",
            showGrid: true,
            legendPosition: "bottom",
            tooltipIndicator: "dot",
            showReferenceZero: true,
            size: 'md',
            gridColor: "#e5e7eb",
            referenceLineColor: "#e5e7eb",
            axisColor: "#d1d5db",
            footer: {
              description: "Temperatura diminuindo com a chegada do inverno",
            },
          },
          interactions: {
            valueFormatter: {
              function: {
                fnCustomSet: "(value: number) => `${value}°C`",
              },
              type: "function"
            },
            data: {
              function: {
                fnCustomSet: 'dadosVisitantes',
              },
              type: "function"
            },
          }
        },
        {
          id: 'ver_chart_bar',
          tag: 'ver_chart_bar',
          componentName: 'verticalBarchart',
          properties: {
            bars: [
              {
                dataKey: 'temperature',
                radius: 5
              },
            ],
            categoryKey: "mes",
            title: "Temperatura Média",
            description: "Janeiro - Junho 2024",
            showGrid: true,
            legendPosition: "bottom",
            tooltipIndicator: "dot",
            showReferenceZero: true,
            size: 'md',
            gridColor: "#e5e7eb",
            referenceLineColor: "#e5e7eb",
            axisColor: "#d1d5db",
            footer: {
              description: "Temperatura diminuindo com a chegada do inverno",
            },
          },
          interactions: {
            valueFormatter: {
              function: {
                fnCustomSet: "(value: number) => `${value}°C`",
              },
              type: "function"
            },
            data: {
              function: {
                fnCustomSet: 'dadosVisitantes',
              },
              type: "function"
            },
          }
        },
        {
          id: 'rad_chart_bar',
          tag: 'rad_chart_bar',
          componentName: 'radialBarchart',
          properties: {
            bars: [
              {
                dataKey: "desktop",
                name: "Desktop",
              },
            ],
            categoryKey: "month",
            nameKey: "month",
            title: "Monthly Stats",
            description: "Desktop and Mobile Users",
            showGrid: true,
            size: "lg",
            startAngle: 90,
            endAngle: -270,
            innerRadius: "30%",
            outerRadius: "140%",
            barSize: 10,
            legendPosition: "bottom",
            gridColor: "#e5e7eb",
            referenceLineColor: "#e5e7eb",
            axisColor: "#d1d5db",
            footer: {
              description: "Desktop usage trends over six months",
            },
          },
          interactions: {
            valueFormatter: {
              function: {
                fnCustomSet: "(value: number) => `${value}`",
              },
              type: "function"
            },
            data: {
              function: {
                fnName: 'dadosMensais',
                fnCustomCode: {
                  fnCode: `
  const dadosMensais = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];
                `,
                },
              },
              type: "function"
            },
          }
        },
        {
          id: 'line_chart',
          tag: 'line_chart',
          componentName: 'linechart',
          properties: {
            lines: [
              {
                dataKey: 'temperature',
              },
            ],
            categoryKey: "mes",
            title: "Temperatura Média",
            description: "Janeiro - Junho 2024",
            showGrid: true,
            legendPosition: "bottom",
            tooltipIndicator: "dot",
            showReferenceZero: true,
            size: 'md',
            gridColor: "#e5e7eb",
            referenceLineColor: "#e5e7eb",
            axisColor: "#d1d5db",
            footer: {
              description: "Temperatura diminuindo com a chegada do inverno",
            },
          },
          interactions: {
            valueFormatter: {
              function: {
                fnCustomSet: "(value: number) => `${value}°C`",
              },
              type: "function"
            },
            data: {
              function: {
                fnCustomSet: 'dadosVisitantes',
              },
              type: "function"
            },
          }
        },
        {
          id: 'pie_chart',
          tag: 'pie_chart',
          componentName: 'piechart',
          properties: {
            nameKey: 'browser',
            pies: [
              {
                dataKey: 'users',
                showLabels: true
              },
            ],
            categoryKey: "browser",
            title: "Média de Utilizadores",
            description: "Janeiro - Junho 2024",
            showGrid: true,
            legendPosition: "bottom",
            tooltipIndicator: "dot",
            showReferenceZero: true,
            size: 'md',
            gridColor: "#e5e7eb",
            referenceLineColor: "#e5e7eb",
            axisColor: "#d1d5db",
            footer: {
              description: "Números de utilizadores por browser",
            },
          },
          interactions: {
            valueFormatter: {
              function: {
                fnCustomSet: "(value: number) => `${value}`",
              },
              type: "function"
            },
            data: {
              function: {
                fnName: 'dadosNavegadores',
                fnCustomCode: {
                  fnCode: `
  const dadosNavegadores = [
    { browser: "Chrome", users: 620 },
    { browser: "Safari", users: 480 },
    { browser: "Firefox", users: 350 },
    { browser: "Edge", users: 290 },
    { browser: "Other", users: 150 },
  ];
                `,
                },
              },
              type: "function"
            },
          }
        },
        {
          id: 'radar_chart',
          tag: 'radar_chart',
          componentName: 'radarchart',
          properties: {
            radars: [
              {
                dataKey: 'users',
                showLabels: true
              },
            ],
            categoryKey: "browser",
            title: "Média de Utilizadores",
            description: "Janeiro - Junho 2024",
            showGrid: true,
            legendPosition: "bottom",
            tooltipIndicator: "dot",
            showReferenceZero: true,
            size: 'md',
            gridColor: "#e5e7eb",
            referenceLineColor: "#e5e7eb",
            axisColor: "#d1d5db",
            footer: {
              description: "Números de utilizadores por browser",
            },
          },
          interactions: {
            valueFormatter: {
              function: {
                fnCustomSet: "(value: number) => `${value}`",
              },
              type: "function"
            },
            data: {
              function: {
                fnCustomSet: 'dadosNavegadores',
              },
              type: "function"
            },
          }
        },
      ]
    },
  ]
};

const pageConfig: PageConfig = {
  id: 'i89Ayp9lmL2p',
  type: 'page',
  types: [],
  pageName: 'charts',
  path: 'charts',
  components: chartLayout,
};

beforeAll(async () => {
  await initComponents();
});

describe('Charts module',() =>{
  it('should save the chart page configuration file', async()=> {
    await newPage(pageConfig, OUTPUT_DIR);
  })

})
