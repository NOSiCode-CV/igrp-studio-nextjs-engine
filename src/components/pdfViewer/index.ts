import {
  pdfViewerPropertiesMapping,
  pdfViewerProperties,
  pdfViewerVariants,
  pdfViewerChildProperties,
  pdfViewerChildPropertiesMapping, pdfViewerStyle, pdfViewerRules, pdfViewerData,
} from './properties';
import { Component, hbsRenderer } from '../index';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';

export default {
  register(component: Component) {
    component.loadImports([
      'import { IGRPPdfViewer } from "@igrp/igrp-framework-react-design-system";'
    ]);

    component.loadComponentClass('IGRPPdfViewer')
    component.loadVariants(pdfViewerVariants());
    component.loadGroup('dataDisplay')
    component.loadLabel('PDF Viewer')
    component.getProperties(pdfViewerProperties());
    component.getPropertiesMapping(pdfViewerPropertiesMapping());
    component.getChildProperties(pdfViewerChildProperties());
    component.getChildPropertiesMapping(pdfViewerChildPropertiesMapping());
    component.getStyle(pdfViewerStyle())
    component.getRules(pdfViewerRules())
    component.getData(pdfViewerData())
    component.loadStates([
    ]);

    component.loadTemplatePath(replaceTemplate(TEMPLATES.ELEMENT, { name: PDF_VIEWER }))

    component.setRenderer(hbsRenderer);
  },
};

const PDF_VIEWER = 'pdfViewer'

export { PDF_VIEWER };