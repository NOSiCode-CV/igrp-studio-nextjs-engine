import { register } from './index';
import aspectModule from "./aspect"
import buttonModule from "./button"
import cardModule from "./card"
import carouselModule from "./carousel"
import chartModule from "./chart"
import checkboxModule from "./checkbox"
import containerModule from "./container"
import datePickerModule from "./datePicker"
import flexModule from "./flex"
import formModule from "./form"
import gridModule from "./grid"
import inlineModule from "./inline"
import inputModule from "./input"
import passwordModule from "./password"
import radioModule from "./radio"
import sectionModule from "./section"
import selectModule from "./select"
import sliderModule from "./slider"
import stackModule from "./stack"
import switchModule from "./switch"
import tableModule from "./table"
import tabsModule from "./tabs"
import textareaModule from "./textarea"

export function registerAllComponents() {
  register('aspect', aspectModule.register);
  register('button', buttonModule.register);
  register('card', cardModule.register);
  register('carousel', carouselModule.register);
  register('chart', chartModule.register);
  register('checkbox', checkboxModule.register);
  register('container', containerModule.register);
  register('datePicker', datePickerModule.register);
  register('flex', flexModule.register);
  register('form', formModule.register);
  register('grid', gridModule.register);
  register('inline', inlineModule.register);
  register('input', inputModule.register);
  register('password', passwordModule.register);
  register('radio', radioModule.register);
  register('section', sectionModule.register);
  register('select', selectModule.register);
  register('slider', sliderModule.register);
  register('stack', stackModule.register);
  register('switch', switchModule.register);
  register('table', tableModule.register);
  register('tabs', tabsModule.register);
  register('textarea', textareaModule.register);
}