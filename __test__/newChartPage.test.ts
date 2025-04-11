import { initComponents, newPage } from '../src';
import { Layout, PageConfig } from '../src/interfaces/types';
import { OUTPUT_TEST } from '../src/utils/testPath';
import { baseInteraction } from '../src/components/default/properties';
import { INTERACTIONS_DEFAULTS, INTERACTIONS_TYPES } from '../src/utils/constants';

export const OUTPUT_DIR = OUTPUT_TEST;

export const chartLayout: Layout = {
  id: 'default_section',
  componentName: 'section',
  properties: {
    spaceY: 6,
  },
  children: [
    {
      id: 'grid_inputs',
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
              fnCustomSet: "(value: number) => `${value}°C`",
              type: "function"
            },
            data: {
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
              type: "function"
            },
          }
        },
        {
          id: 'hor_chart_bar',
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
              fnCustomSet: "(value: number) => `${value}°C`",
              type: "function"
            },
            data: {
              fnCustomSet: 'dadosVisitantes',
              type: "function"
            },
          }
        },
        {
          id: 'ver_chart_bar',
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
              fnCustomSet: "(value: number) => `${value}°C`",
              type: "function"
            },
            data: {
              fnCustomSet: 'dadosVisitantes',
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
