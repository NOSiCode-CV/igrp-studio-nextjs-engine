import { baseRules, baseStyle } from "../../../default/properties";

export function tableRowSubcomponentProperties(){
    return{ rule:{type:'string' ,required: false}};
}

export function tableRowSubcomponentPropertiesMapping(){
    return{};
}

export function tableRowSubcomponentChildProperties(){
    return{};
}

export function tableRowSubcomponentChildPropertiesMapping(){
    return{};
}

export function tableRowSubcomponentVariants(){
    return{};
}

export function tableRowSubcomponentStyle(){
    return{... baseStyle};
}

export function tableRowSubcomponentRules(){
    return{... baseRules};
}