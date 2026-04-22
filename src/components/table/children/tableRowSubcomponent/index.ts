import {
    tableRowSubcomponentProperties,
    tableRowSubcomponentPropertiesMapping,
    tableRowSubcomponentChildProperties,
    tableRowSubcomponentChildPropertiesMapping,
    tableRowSubcomponentVariants,
    tableRowSubcomponentStyle,
    tableRowSubcomponentRules

} from './properties';
import { Component, liquidRenderer } from "../../../index";
import {TABLE} from '../../index'

export default{
    register(component : Component){
        component.loadImports([]);
        //component.loadComponentClass('IGRPDataTableRowSubcomponent');
        component.loadVariants(tableRowSubcomponentVariants());
        component.loadParent(TABLE);
        component.loadGroup('Table');
        component.loadLabel('Row Subcomponent');
        component.getProperties(tableRowSubcomponentProperties());
        component.getPropertiesMapping(tableRowSubcomponentPropertiesMapping());
        component.getChildProperties(tableRowSubcomponentChildProperties());
        component.getChildPropertiesMapping(tableRowSubcomponentChildPropertiesMapping());
        component.getStyle(tableRowSubcomponentStyle());
        component.getRules(tableRowSubcomponentRules());
        component.loadStates([]);
        component.setRenderer(liquidRenderer);

    }
}

const TABLE_ROW_SUBCOMPONENT = 'tableRowSubcomponent';
export {TABLE_ROW_SUBCOMPONENT};