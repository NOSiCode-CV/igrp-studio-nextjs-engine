import { register } from './index';
import aspectModule, { ASPECT } from './aspect';
import buttonModule, { BUTTON } from './button';
import cardModule, { CARD } from './card';
import cardContentModule, { CARD_CONTENT } from './card/children/cardContent';
import cardFooterModule, { CARD_FOOTER } from './card/children/cardFooter';
import cardHeaderModule, { CARD_HEADER } from './card/children/cardHeader';
import carouselModule, { CAROUSEL } from './carousel';
import chartModule, { CHART } from './chart';
import chatModule, { CHAT } from './chat';
import checkboxModule, { CHECKBOX } from './checkbox';
import columnModule, { COLUMN } from './column';
import columnsModule, { COLUMNS } from './columns';
import containerModule, { CONTAINER } from './container';
import datePickerModule, { DATE_PICKER } from './datePicker';
import dropdownModule, { DROPDOWN } from './dropdown';
import dropdownItemModule, { DROPDOWN_ITEM } from './dropdown/children/dropdownItem';
import flexModule, { FLEX } from './flex';
import formModule, { FORM } from './form';
import fragmentModule, { FRAGMENT } from './fragment';
import gridModule, { GRID } from './grid';
import headlineModule, { HEADLINE } from './headline';
import iconModule, { ICON } from './icon';
import inputModule, { INPUT } from './input';
import inputTextModule, { INPUT_TEXT } from './inputText';
import labelModule, { LABEL } from './label';
import pageHeaderModule, { PAGEHEADER } from './pageHeader';
import paragraphModule, { PARAGRAPH } from './paragraph';
import radioModule, { RADIO } from './radio';
import repetitiveListModule, { REPETITIVE_LIST } from './repetitiveList';
import sectionModule, { SECTION } from './section';
import selectModule, { SELECT } from './select';
import sliderModule, { SLIDER } from './slider';
import stackModule, { STACK } from './stack';
import switchModule, { SWITCH } from './switch';
import tableModule, { TABLE } from './table';
import tableBadgeModule, { TABLE_TEXT_CELL } from './table/children/tableTextCell';
import tableColumnsModule, { TABLE_COLUMNS } from './table/children/tableColumns';
import tableExpanderCellModule, { TABLE_EXPANDER_CELL } from './table/children/tableExpanderCell';
import tableAmountCellModule, { TABLE_AMOUNT_CELL } from './table/children/tableAmountCell';
import tableDateCellModule, { TABLE_DATE_CELL } from './table/children/tableDateCell';
import tableBadgeCellModule, { TABLE_BADGE_CELL } from './table/children/tableBadgeCell';
import tableDateFilterModule, { TABLE_DATE_FILTER } from './table/children/tableDateFilter';
import tableDropdownFilterModule, { TABLE_DROPDOWN_FILTER } from './table/children/tableDropdownFilter';
import tableMinMaxFilterModule, { TABLE_MINMAX_FILTER } from './table/children/tableMixMaxFilter';
import tableInputFilterModule, { TABLE_INPUT_FILTER } from './table/children/tableInputFilter';
import tableSelectFilterModule, { TABLE_SELECT_FILTER } from './table/children/tableSelectFilter';
import tableFacetedFilterModule, { TABLE_FACETED_FILTER } from './table/children/tableFacetedFilter';
import tableButtonListCellModule, { TABLE_BUTTON_LIST_CELL } from './table/children/tableButtonListCell';
import tableActionListCellModule, { TABLE_ACTION_LIST_CELL } from './table/children/tableActionListCell';
import tableAlertButtonModule, { TABLE_ALERT_BUTTON } from './table/children/tableAlertButton';
import tableLinkButtonModule, { TABLE_LINK_BUTTON } from './table/children/tableLinkButton';
import tableModalButtonModule, { TABLE_MODAL_BUTTON } from './table/children/tableModalButton';
import tableDropdownMenuCellModule, { TABLE_DROPDOWN_MENU_CELL } from './table/children/tableDropdownMenuCell';
import tableAlertDropdownItemModule, { TABLE_ALERT_DROPDOWN_ITEM } from './table/children/tableAlertDropdownItem';
import tableLinkDropdownItemModule, { TABLE_LINK_DROPDOWN_ITEM } from './table/children/tableLinkDropdownItem';
import tableModalDropdownItemModule, { TABLE_MODAL_DROPDOWN_ITEM } from './table/children/tableModalDropdownItem';
import tableAlertActionModule, { TABLE_ALERT_ACTION } from './table/children/tableAlertAction';
import tableLinkActionModule, { TABLE_LINK_ACTION } from './table/children/tableLinkAction';
import tableModalActionModule, { TABLE_MODAL_ACTION } from './table/children/tableModalAction';

import tableFiltersModule, { TABLE_FILTERS } from './table/children/tableFilters';
import tabsModule, { TABS } from './tabs';
import textareaModule, { TEXTAREA } from './textarea';

export function registerAllComponents() {
  register(ASPECT, aspectModule.register);
  register(BUTTON, buttonModule.register);
  register(CARD, cardModule.register);
  register(CARD_CONTENT, cardContentModule.register);
  register(CARD_FOOTER, cardFooterModule.register);
  register(CARD_HEADER, cardHeaderModule.register);
  register(CAROUSEL, carouselModule.register);
  register(CHART, chartModule.register);
  register(CHAT, chatModule.register);
  register(CHECKBOX, checkboxModule.register);
  register(COLUMN, columnModule.register);
  register(COLUMNS, columnsModule.register);
  register(CONTAINER, containerModule.register);
  register(DATE_PICKER, datePickerModule.register);
  register(DROPDOWN, dropdownModule.register);
  register(DROPDOWN_ITEM, dropdownItemModule.register);
  register(FLEX, flexModule.register);
  register(FORM, formModule.register);
  register(FRAGMENT, fragmentModule.register);
  register(GRID, gridModule.register);
  register(HEADLINE, headlineModule.register);
  register(ICON, iconModule.register);
  register(INPUT, inputModule.register);
  register(INPUT_TEXT, inputTextModule.register);
  register(LABEL, labelModule.register);
  register(PAGEHEADER, pageHeaderModule.register);
  register(PARAGRAPH, paragraphModule.register);
  register(RADIO, radioModule.register);
  register(REPETITIVE_LIST, repetitiveListModule.register);
  register(SECTION, sectionModule.register);
  register(SELECT, selectModule.register);
  register(SLIDER, sliderModule.register);
  register(STACK, stackModule.register);
  register(SWITCH, switchModule.register);
  register(TABLE, tableModule.register);

  // Table Columns
  register(TABLE_TEXT_CELL, tableBadgeModule.register);
  register(TABLE_COLUMNS, tableColumnsModule.register);
  register(TABLE_EXPANDER_CELL, tableExpanderCellModule.register);
  register(TABLE_FILTERS, tableFiltersModule.register);
  register(TABLE_AMOUNT_CELL, tableAmountCellModule.register);
  register(TABLE_DATE_CELL, tableDateCellModule.register);
  register(TABLE_BADGE_CELL, tableBadgeCellModule.register);
  register(TABLE_BUTTON_LIST_CELL, tableButtonListCellModule.register);
  register(TABLE_DROPDOWN_MENU_CELL, tableDropdownMenuCellModule.register);
  register(TABLE_ACTION_LIST_CELL, tableActionListCellModule.register);

  // Action Buttons
  register(TABLE_ALERT_BUTTON, tableAlertButtonModule.register);
  register(TABLE_MODAL_BUTTON, tableModalButtonModule.register);
  register(TABLE_LINK_BUTTON, tableLinkButtonModule.register);

  // Dropdown Items
  register(TABLE_ALERT_DROPDOWN_ITEM, tableAlertDropdownItemModule.register);
  register(TABLE_MODAL_DROPDOWN_ITEM, tableModalDropdownItemModule.register);
  register(TABLE_LINK_DROPDOWN_ITEM, tableLinkDropdownItemModule.register);

  // Action Items
  register(TABLE_ALERT_ACTION, tableAlertActionModule.register);
  register(TABLE_MODAL_ACTION, tableModalActionModule.register);
  register(TABLE_LINK_ACTION, tableLinkActionModule.register);

  // Table Filters
  register(TABLE_DATE_FILTER, tableDateFilterModule.register);
  register(TABLE_DROPDOWN_FILTER, tableDropdownFilterModule.register);
  register(TABLE_INPUT_FILTER, tableInputFilterModule.register);
  register(TABLE_MINMAX_FILTER, tableMinMaxFilterModule.register);
  register(TABLE_SELECT_FILTER, tableSelectFilterModule.register);
  register(TABLE_FACETED_FILTER, tableFacetedFilterModule.register);

  register(TABS, tabsModule.register);
  register(TEXTAREA, textareaModule.register);
}