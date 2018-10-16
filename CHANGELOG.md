

## 0.21.31

- [General] generate `component.less` from package.json

## 0.21.30

- [Form]: `CHANGED` style improvement for more clear view mode
- [Form]: `CHANGED` support js style export
- [Form]: `CHANGED` change prop `jsxprefixCls` to `prefixCls`


## 0.21.23

- [FormField]: `CHNAGED` fix eslint errors
- [FormField]: `CHANGED` use prefixCls for every dom node
- [FormField]: `NEW` support new prop `tipInLabel`

## 0.21.19

- [General] add new Component `UserGuide`

## 0.21.18

- [CascadeSelet]: `FIXED` onOk click should not occurred when isMustLeaf is true
- [Mention]: `NEW` add `getMentions` API to editors for getting all current mentions.
- [Mention]: `FIXED` fix issue #22 trigger change event with outdated value.
- [Message]: `FIXED` to Message.clear function error
- [Message]: `NEW` new API Message.mask_loading
- [TreeSelect]: `CHANGED` change default value of treeNodeFilterProp to "title"
- [TreeSelect]: `FIXED` add padding-left:15px to rightPanelNode when treeCheckStrictly is true
- [TreeSelect]: `FIXED` fix rightPanelNode when treeCheckStrictly is true
- [TreeSelect]: `CHANGED` optimized disabled style.
- [Uploader]: `CHANGED` modify picker position when isVisual
- [Uploader]: `CHANGED` show download icon when readonly


## 0.21.14

- [Uploader]: `CHANGED` add new prop 'hideUploadIcon'
- [Uploader]: `CHANGED` hidepicker when isVisual and over queueCapcity

## 0.21.13

- [Theme] `NEW` add alipay theme 

## 0.21.10

- [CascadeMultiSelect] `FIXED`: getDerivedStateFromProps will occur a re-display problem when props.value not change.

## 0.21.6

- [General] add new component `Card`

## 0.21.4

- [General] add new component `NoticeIcon`

## 0.21.3

- [Badge]: `CHANGED` support new prop `themeType`

## 0.21.2

- [CascadeSelect]: `FIXED` The selected text could not be displayed in the input when showSearch is true.
- [CascadeSelect]: `CHANGED` add 'dropdownClassName' prop
- [CascadeSelect]: `CHANGED` add 'showSearch' and 'onSearch' prop
- [CascadeSelect]: `CHANGED` add description display feature
- [Calendar]: `CHANGED` value can be selected from end to start in cascade mode



## 0.21.0

- [General] fit React@16.x

## 0.20.4

- [Style] `CHANGED` Button add focus state
- [Style] `NEW` new atomic class


## 0.20.1

- [CascadeSelect]: `FIXED` placeholder color follow Select2 placeholder color.
- [Dialog]: `CHANGED` change the tile color and change the padding of dialog content.
- [Table]: `CHANGED` support new prop `toggleTreeExpandOnRowClick`
- [TreeSelect]: `FIXED` the dropdown should not shake, when dropdownMatchSelectWidth is false.

## 0.20.0

- [Table]: `CHANGED` update `uxcore-tree` to `^0.3.0`
- [Table]: `CHANGED` new feature column.filters
- [Tree]: `NEW` add DropDownTreeNode component
- [Select]: `FIXED` multiple mode placeholder text overflow
- [CascadeSelect]: `FIXED` Could not occur onChange by clicking clear button when props.isMustSelectLeaf is true.
- [CascadeSelect]: `FIXED` get selectedOptions error
- [CascadeSelect]: `FIXED` fixed selectedOptions[0].hasOwnProperty error
- [TreeSelect]: `FIXED` use variable for box-shadow
- [TreeSelect]: `FIXED` remove the overflow-scroll bar of a dropdown wrapper
- [CascadeSelect]: `FIXED` modified disabled style priority.
- [CascadeSelect]: `FIXED` wrong dropdown style cover
- [CheckboxGroup]: `CHANGED` item support className
- [Dropdown]: `CHANGED` new style, support dropdown submenu
- [Icon]: `CHANGED` add 2 new icons
- [Table]: `CHANGED` support new prop `toggleSubCompOnRowClick`

## 0.19.24

- [CascadeSelect]: `FIXED` could not clear display-value from outside.
- [Dialog]: `NEW` `Dialog.confirm` can be closed from outside.
- [Tree]: `CHANGED` update `rc-tree` to `~1.11.0`  
- [TreeSelect]: `FIXED` make compatible for `rc-tree-select` deprecated methods


## 0.19.22

- [General] add new component `TimePicker`

## 0.19.20

- [CascadeSelect]: `CHANGED`: optimized visual display
- [FloatNav]: `CHANGED` separate wrapper and floatnav
- [Icon]: `CHANGED` add 1 new icon
- [Table]: `NEW` support `footer`, `showFooter`, `showRowGroupFooter`
- [Table]: `FIXED` action column will be hidden if columns' visibility is changed
- [Table]: `FIXED` error tooltip fail to move with body scrolling
- [Table]: `FIXED` should not render ActionBar only when `props.actionBar` is an empty array
- [Transfer]: `FIXED` fix some styles not compatible with last design

## 0.19.16

- [Form]: `FIXED` NumberInputFormField do not format empty string
- [Formatter]: `CHANGED` use `big.js` instead of `parseFloat` to handle large number fixed
- [Formatter]: `CHANGED` date method return '' if  param is undefined/null/empty string.
- [Table]: `FIXED` body and header scroll will trigger each other additionally.
- [Uploader]: `CHANGED` show image with album if click image
- [Style]: `CHANGED` orange & blue brand primary color change

## 0.19.15

- [Form]: `FIXED` wrong NumberInputFormField right addon style.
- [Form]: `CHANEGD` NumberInputFormField add new prop `formatOnBlur`


## 0.19.14

- [Style]: `CHANGED` new loading icon 

## 0.19.12

- [Table]: `CHANGED` row group style adjustment.
- [FormField]: `CHANGED` remove useless `jsxplaceholder` propType & defaultProps config
- [Collapse]: `FIXED` arrow color


## 0.19.10

- [Table]: `CHANGED` remove Tbody repaint logic

## 0.19.9

- [CascadeSelect]: `FIXED`: search input bug
- [CascadeSelect]: `NEW`: searchOption prop
- [CascadeSelect]: `NEW`: 'search' option of displayMode
- [CascadeSelect]: `FIXED`: value cannot be displayed if value is set before options.
- [CascadeSelect]: `FIXED` the component's height has 2 px more in the small or middle size mode.
- [Collapse]: `CHANGED` onChange add new param `activeKey`
- [Table]: `CHANGED` update `uxcore-checkbox-cell-field` to `^0.2.0`
- [Table]: `CHANGED` support new prop `rowGroupKey`
- [Table]: `FIXED` column picker style
- [Table]: `NEW` add new API `addEmptyRowFromTop` & `addRowFromTop(rowData)`
- [Tabs]: `NEW` support `tabBarStyle` & `tabContentStyle`
- [Validator]: `FIXED` update china mobile regular expression
- [Timeline]: `CHANGED` style improvement
- [Button]: `CHANGED` unify prop `size` enumerator naming (from `medium` to `middle`)
- [FormField]: `CHANGED` change grid percent to match the expected behaviour
- [Dialog]: `FIXED` Dialog.success with timer do not error
- [MultiSelect]: `FIXED` add missing onSubmit handler
- [RadioGroup]: `CHANGED` remove useless defaultValue logic
- [RadioGroup]: `CHANGED` fire `onChange` only when value is changed
- [TreeSelect]: `FIXED` clear inputValue when nextProps.value is empty.
- [Uploader]: `FIXED` fix button style (issue #66)
- [Uploader]: `FIXED` fix mutable props (issue #71)

## 0.19.7

- [Uploader]: `CHANGED` fix some wrong style
- [Validator]: `FIXED` email and hex validators support using uppercase
- [Table]: `FIXED` data change don't check right fixed.
- [Table]: `CHANGED` imporve scroll performance using raf.
- [Table]: `CHANGED`: props.config add showSearch property

## 0.19.4

- [EmptyData]: `FIXED` default logo url is http

## 0.19.3

- [Icon]: `CHANGED` add 14 new icons
- [Uploadr]: `CHANGED` replace preview icon

## 0.19.1

- [General]: add `ButtonGroup`
- [Table]: `CHANGED` replace inner `CollapsedButton` with `ButtonGroup`
- [EmptyData]: `CHANGED` change default empty image


## 0.19.0

- [CascadeSelect]: `NEW` prop `onSelect`
- [Title]: `CHANGED` support new prop `noDecoration`
- [Tree]: `CHNAGED` update tree css
- [General]: add `Const`, `FormField`

- [Menu]: `BREAKING CHANGED` upgrade rc-menu to [`^6.0.0`](https://github.com/react-component/menu/blob/master/HISTORY.md#600--2017-10-30) , new menu will render its submenu into `document.body` which may affect some user-defined css. 


## 0.18.3

- [Title] `CHANGED` support new prop `className`

## 0.18.2


- [Form] `CHANGED` adjust textarea min-height
- [Select] `CHANGED` optimize select-value paddingRight, use large one only when allowClear is true

## 0.18.1

- [Message] `FIXED`  content can be a  React.Element. 
- [MultiSelect] `CHANGED` keep selection order.
- [Popover] `CHANGED` arrow position imporvement
- [Popover] `CHANGED` update `rc-tooltip` to `^3.0.0`
- [Switch] `CHANGED` support new prop `loading`
- [Table] `FIXED` hide content bottom border line when there is no data
- [Table] `FIXED` missing `POST` fetch method
- [Table] `FIXED` left fixed table can not match the height with the mainTable, when table is multiline.
- [Table] `FIXED` when table is resized & mulitiline, fixed table's height can not match.
- [Table] `FIXED` unexpected space between body and header 
- [Table] `CHANGED` column.width support percentage
- [Table] `CHANGED` add new prop `showUnknownTotalPager`
- [Table] `CHANGED` adjust column picker style
- [Table] `NEW` support new prop `onColumnPick`
- [Transfer] `FIXED` fix color to comply with design rules.

## 0.18.0

- [Style] `NEW` add danger button
- [Style] `NEW` add new function color
- [Style] `CHANHED` new color generation rule
- [Button] `NEW` add new prop `danger`
- [Button] `Deprecated` Button.ButtonGroup
- [Album] `CHANHED` increase album-overlay z-index to 1000 which is equal to dialog's
- [CascadeMultiSelect] `NEW`: isCleanDisabledLabel prop
- [Dialog] `FIXED` iusse #28 #20  Dialog.xxx icon can be changed
- [Dialog] `NEW` iusse #27 Dialog.xxx support `className`
- [Dialog] `CHANGED` iusse #24 use padding instead of margin to position title
- [Form] `NEW` add new API `doValidateAndScroll`
- [Formatter] `FIXED` Formatter.date(null) will return 1970-01-01
- [Step] `FIXED` set title attribute while the type is string, not jsx, see #17
- [Tabs] `FIXED` wrong open type split-line color
- [Tooltip] `NEW` dark background tooltip
- [Transfer] `CHANGED` add disabled option to transfer item
- [TreeSelect] `CHANGED` rc-tree-select@1.12.0, change extend-style to usage-style.


## 0.17.1

- [Component] Rate: `FIXED` Rate is not exported.

## 0.17.0

- [General] fit React@15.x: Switch/Form
- [Component] Calendar: `CHNAGED` update `rc-time-picker` to ~2.4.0
- [Component] Calendar: `CHNAGED` update `rc-calendar` to ~8.4.0
- [Component] Calendar: `CHANGED` support new prop `onOpenChange`
- [Component] Calendar: `FIXED` timepicker style bug when calendar is shown around the border of the container.
- [Component] CascadeSelect: `NEW`: new prop `isMustSelectLeaf` 
- [Component] CheckboxGroup: `FIXED` Item props `disabled` should not work when it is `undefined`
- [Component] Steps: `NEW` icon prop for Step support uxcore-icon
- [Component] Uploader: `FIXED` style bug for `upload failed` text
- [Component] Uploader: `CHANGED` allow downloadUrl & previewUrl to be an empty string to hidd the corresponding button.
- [Component] Form: `NEW` auto adjust field's margin between view mode & edit mode
- [Component] Form: `CHANGED` adjust safe distance between two fields in a row.
- [Component] Form: `CHANGED` adjust field's margin for different size

## BREAKING CHANGE

- [Component] Form: `NEW` new field prop `inputBoxMaxWidth` to define a max width for field input box in a very wide page.  to support this feature, you must use both js and css in 0.17.0 version.

## 0.16.3

- [General] fit React@15.x: Alert/Popover/Table
- [General] add tests: Alert/Popover
- [Component] Animate: `CHANGED` update `rc-animate` to `^2.0.0`
- [Component] Dialog: `CHANGED` remove circular dependencies between Dialog & confirm 
- [Component] Table: `FIXED` deepcopy beforeFetch params before passed
- [Component] Table: `CHANGED` default empty data for locale
- [Component] Table: `CHANGED` action column title padding adjustment
- [Component] Table: `CHANGED` add new action config `buttonType`
- [Component] Tabs: `FIXED` fix the heigth of tab-bar
- [Component] Tooltip: `CHANGED` update `rc-tooltip` to `^3.0.0`
- [Component] Transfer: `CHANGED` replace dependency `deepcopy` with `lodash/cloneDeep`

## 0.16.0

- [General] fit React@15.x
- [Component] CascadeMultiSelect: `NEW`: keyCouldDuplicated prop
- [Component] CascadeMultiSelect: `FIXED`: remove Clear Button when all items are disabled
- [Component] CascadeMultiSelect: `NEW`: display all selection levels when use the independent Panel.
- [Component] CascadeMultiSelect: `NEW`: add a new attribute "disabled" to item of options array to enable/disable checkbox.
- [Component] FloatNav: `NEW` new style
- [Component] FloatNav: `CHANGED` support more `navItem` nesting levels
- [Component] Form: `CHANGD` Cascade pass all Select prop
- [Component] Menu: `BREAKING CHANGED` onOpen & onClose is replaced with `onOpenChange`

## 0.15.17

- [Component] CascadeMultiSelect: `FIXED`: Panel position can not be float:left when used independently
- [Component] CheckboxGroup: `CHANGED` adjust space between text & checkbox
- [Component] RadioGroup: `CHANGED` adjust space between radio & text
- [Component] Steps: `CHANGED` update style, change icons to uxcore-icon  
- [Component] Steps: `NEW` new types: `bottom-desc` `arrow-bar`

## 0.15.15

- [Component] Calenadr: `CHANGED` style adjustment for small & middle size
- [Component] CascadeMultiSelect: `FIXED` trigger the onSelect event when click the close icon.
- [Component] MultiSelect: `NEW` add new prop `size`


## 0.15.13

- [Component] Album: `NEW` add new prop `customButtons`
- [Component] Album: `FIXED` rgbaDetect bug if no script label exists
- [Component] Calendar: `CHANGED` support new prop `size`
- [Component] CascadeSelect: `CHANGED` support new prop `size`
- [Component] CheckboxGroup: `CHANGED` add new prop `addon`
- [Component] Form: `CHANGED` support new prop `verticalAlign`
- [Component] Form: `FIXED` title's height after a formfield is wrong.
- [Component] Message: `CHANGED` a counter of instance. the container will be removed if this counter is equal to 0.
- [Component] Pagination: `CHANGED` improve style when total count is large
- [Component] Select: `NEW` add new prop `size`
- [Component] Select: `FIXED` placeholder overflow
- [Component] Uploader: `FIXED` shown photo index is always 0
- [Component] Uploader: `FIXED` more robust getUrl
- [Component] Uploader: `FIXED` compatible with access to the previewUrl and downloadUrl
- [Component] Uploader: `FIXED` default image can't preview
- [Component] Uploader: `CHANGED` add album show image if only image


## 0.15.8

- [Component] Table: `CHANGED` only select cell text when the cell is double clicked

## 0.15.7

- [Style] `FIXED` set input placeholder color important to prevent being overrided in IE10/11

## 0.15.6

- [Component] CascadeMultiSelect: `FEAT`: add readOnly prop
- [Component] CascadeMultiSelect: `FEAT`: add beforeRender prop
- [Component] CascadeMultiSelect: `FEAT`: pass cascade selected data to `onSelect` & `onOk`
- [Component] Matrix: `CHANGED` new style
- [Component] Table: `CHANGED` style adjustment

## 0.15.3

- [Component] Collapse: `CHANGED` add animation while toggling a panel component
- [Component] Table: `CHANGED` more robust `checkBodyHScroll`
- [Component] Table: `FIXED` more reliable check logic

## 0.15.2

- [Component] Uploader: `CHANGED` new style
- [Component] Uploader: `FIXED` true percentage
- [Component] Uploader: `NEW` add readOnly prop

## 0.15.0

- [Component] CascadeMultiSelect: `FIXED`: dynamic options fail to be re-rendered.
- [Component] CascadeMultiSelect: `CHANGED`: the third param of prop `onItemClick` is the all-selected data.
- [Component] Form: `CHANGED` use `uxcore-title` instead of old FormRowTitle
- [Component] Table: `CHANGED` hide pager if totalCount is lower than pageSize and sizeChanger is hiden.
- [Component] Table: `CHANGED` update CellField to `^0.2.0`, support `errMsg`
- [Component] Table: `CHANGED` collapsed Button style adjustment
- [Component] Table: `CHANGED` add a new theme type `ghost` for the nested table.
- [Component] Table: `FIXED` group table column picker bug when toggle an item's visibility in common group.
- [Component] Table: `FIXED` group fixed table border bug
- [Component] Table: `FIXED` fixed table height React warning
- [Component] Table: `CHANGED` use popover instead of column picker dropdown
- [Component] Table: `CHANGED` new column picker trigger icon
- [Component] Table: `CHANGED` style: mask color & fixed table box-shadow
- [Component] Table: `CHANGED` add animation when toggling sub component 
- [Component] Tree: `CHANGED` add animation


## 0.14.8

- [Component] Calendar: `CHANGED` support new props `yearSelectOffset` & `yearSelectTotal` 
- [Component] Mention: `CHANGED` support multiple mention
- [Component] Popover: `CHANGED` support new prop `align`
- [Component] Select: `CHANGED` hide combobox arrow
- [Component] Table:  `CHANGED` hide vertical scrollBar if body can not scroll vertically.
- [Component] Table:  `NEW` support a new type `split-line`.
- [Component] Uploader:  `FIXED` Fix image uploader filename overflow styles
- [Component] Uploader:  `FIXED` Add filename title attribute

## 0.14.7

- [Component] MultiSelect: `FIXED` button style bug
- [Component] PickableFormField: `CHANGED` update formfield version
- [Component] Steps: `FIXED` style fix for long step title
- [Component] Table: `CHANGED` `resetRow` & `resetAllRow` will do validate
- [Component] Table: `FIXED` fixed Row height not equal to main table if multiline row mode is on

## 0.14.6

- [Style] `FIXED` button font-size & padding

## 0.14.5

- [Component] Table: `FIXED` `checkBodyHScroll` may throw error if `rightFixedTable` is not defined
- [Component] Table: `FIXED` rightFixedTable position bug if table width is too large to scroll.
- [Component] Table: `FIXED` `action.isDisable` fail to work.
- [Component] Table: `CHANGED` pass rowData to `action.isDisable`

## 0.14.2

- [Component] Select: `CHNAGED` update `rc-select` to ~6.8.0


## 0.14.1

- [Style] `CHANGED` use non-alpha color for border-color to fix latest chrome render bug [#8](https://github.com/uxcore/kuma-base/issues/8)
- [Style] `FIXED` disabled outline button color
- [Style] `CHANGED` remove button margin

## 0.14.0

- [Component] Badge: `CHANGED` add displayName
- [Component] CascadeMultiSelect: `FIXED`: dom-align fail to work
- [Component] Icon: `CHANGED` add 9 new icons
- [Component] Table: `NEW` support new prop `shouldResetExpandedKeys`

## 0.13.3

- [General] `FIXED` server render support

## 0.13.2

- [Component] Menu: `FIXED` text overflow style
- [Component] Table: `NEW` add new method `viewAllRow`, `resetAllRow` and `resetAndViewAllRow`.
- [Component] Table: `FIXED` DateCellField icon style
- [Component] Table: `FIXED` undefined bug if column is fixed in `Header`
- [Component] Tag: `CHANGED` prop `onAdd` support callback to prevent input reset

## 0.13.1

- [Component] CascadeSelect: `NEW`: columnWidth prop, remove dropDownWidth prop
- [Component] Pickable: `FIXED` iteration bug when rootWidth is 0
- [Component] Uploader: `FIXED` render an empty container if tips is empty

## 0.13.0

- [Component] Dialog: `FIXED` close icon encoding bug
- [Component] Transfer: `FIXED` text overflow style bug
- [Component] Uploader: `FIXED` filename overflow style bug
- [Component] Uploader: `FIXED` missing `action-remove` in some remove button
- [General] add new component `PickableFormField`, `Title` 


## 0.12.0

- [Component] Form: `CHANGED` filter invalid letter in `NumberInput`
- [Component] MultiSelect: `CHANGED` footer redesign
- [Component] Pagination: `CHANGED` add quick jumper button 
- [Component] Pagination: `CHANGED` quick jumper input value follow the current page
- [Component] Pickable: `CHANGED` add new prop `enableFold`
- [Component] Pickable: `NEW` add new prop `defaultFoldItems`， `locale`, `maxLines`


## 0.11.5

- [Component] Table: `FIXED` copyData can be changed by `addValuesInData` method
- [Component] Uploader: `FIXED` `reset` method fails to work

## 0.11.4

- [Component] CascadeMultiSelect: `Fixed` fix issue [#13](https://github.com/uxcore/uxcore-cascade-multi-select/issues/13).
- [Component] Icon: `CHANGED` add 3 new icons
- [Component] Menu: `CHANGED` add new theme `none-border-dark`
- [Component] Menu: `CHANGED` none-border theme style change

## 0.11.1

- [Component] Form: label width change

## 0.11.0

- [Component] Button: size change

## 0.10.11

- [General] add new theme `green`

## 0.10.10

- [Component] Button: `NEW` support new prop `ghost`
- [Component] Button: `CHANGED` prop `type` support new value `white`
- [Component] ToTop: `CHANGED` new icon
- [Component] Uploader: `CHANGED` use `uxcore-button` for default trigger


## 0.10.7

- [Component] Alert: `CHANGED` new icon
- [Component] Alert: `CHANGED` new style
- [Component] Badge:  `CHANGED` style improvement
- [Component] Calendar: `FIXED` incorrect style
- [Component] CascadeMultiSelect: `FIXED` incorrect style
- [Component] Carousel: `CHANGED` lock react-slick version
- [Component] Collapse: `FIXED` support prop `className`
- [Component] Icon: `CHANGED` add 20 new icons
- [Component] Message: `CHANGED` new icon 
- [Component] Message: `CHANGED` support small size
- [Component] Message: `CHANGED` a new way to pass instance options
- [Component] Pagination: `CHANGED` add i18n for unknown total
- [Component] Pagination: `FIXED` incorrect style
- [Component] Pickable: `FIXED` fix propType check.
- [Component] Rate: `FIXED` wrong alwaysTip container width when total is not 5.
- [Component] Rate: `NEW` add new props `icons`, `actveIcons` & `activeAll`
- [Component] Select: `FIXED` incorrect style
- [Component] Steps: `FIXED` incorrect style
- [Component] Table: `FIXED` method `getCheckStatus` & `selectAll` bug when `rowSelection.isDisabled` is used
- [Component] Tabs: `CHANGED` brick style adjustment
- [Component] ToTop: `CHANGED` style adjustment
- [Component] Transfer: `CHANGED` style adjustment

## 0.10.6

- [Component] CascadeSelect: ``FIXED` hover and focus color.
- [Component] Crumb: ``FIXED` hover and focus color.
- [Component] Dialog: `CHANGED` update rc-dialog to ~6.5.0
- [Component] Dialog: `CHNAGED` add footer top border line (style)
- [Component] Dialog: `CHANGED` Dialog.confirm support `okText` & `cancelText`
- [Component] Form: `CHANGED` method setValues will handle non-existent key. (#135)
- [Component] Pickable: `CHANGED` prop `type` support `simpleHook`
- [Component] Popover: `CHANGED` add new prop `getTooltipContainer`
- [Component] TreeSelect: `FIXED` i18n

## 0.10.1

`2017-04-06`

- [Component] Button: `CHANGED` change loading icon
- [Component] Button: `CHANGED` add icon button adaption
- [Component] Collapse: `CHANGED` new style
- [Component] Table: `FIXED` default width of rowSelector is not equal in every case.
- [Component] Transfer: `CHANGED` style change

## 0.10.0

`2017-04-05`

- [Component] Popover: `CHANGED` new style
- [Component] Steps: `CHANGED` new style
- [Component] Timeline: `NEW` add new props `dotted`, `active` & `title`
- [Component] Timeline: `CHANGED` new style
- [Component] Tooltip: `CHANGED` new style
- [Component] Tree: `CHANGED` new style


## 0.9.6

`2017-04-05`

- [Component] Calendar: `CHANGED` month & year panel style change
- [Component] Calendar: `CHANGED` use new icon
- [Component] Calendar: `CHANGED` style details adjustment
- [Component] Dialog: `CHANGED` use new icon
- [Component] Dialog: `NEW` add new props `icon`
- [Component] Icon: `CHANGED` add 8 new icons
- [Component] Pagination: `CHANGED` adjust quick jumper position
- [Component] Pickable: `CHANGED` hook icon change
- [Component] Tag: `CHANGED` new icon
- [Component] Tag: `CHANGED` style change
- [Component] Tag: `NEW` new prop `type`




## 0.9.0

`2017-03-27`

- [Component] Dialog: `CHANGED` change button size
- [Component] MultiSelect: `CHANGED` change style
- [Component] Pagination: `CHANGED` change style
- [Component] Rate: `CHANGED` new icon
- [Component] Select: `CHANGED` style adjustment
- [Component] Uploader: `CHANGED` new style
- [Component] Icon: `NEW` add 4 new icons


## 0.8.8

`2017-03-24`

- [Component] CascadeMultiSelect: `FIXED` remove transparent split.
- [Component] CascadeSelect: `CHANGED` trigger onChange when on click `the ok button`
- [Component] Icon: `NEW` add 8 new icons
- [Component] MultiSelect: `NEW` add locale support 
- [Component] Rate: `CHANGED` style change
- [Component] Tabs: `CHANGED` brick style adjustment
- [Component] Tabs: `FIXED` type propTypes validation

## 0.8.6

`2017-03-20`

- [Component] Album: `CHANGED` thumbnail style
- [Component] Calendar: `FIXED` fix year select menu will overflow if locale is en-us
- [Component] CascadeMultiSelect: `FIXED` ie9+ result panel width style error
- [Component] Crumb: `CHANGED` new style
- [Component] Pagination: `CHANGED` new style
- [Component] Pagination: `NEW` add new style for unknown total
- [Component] Pickable: `FIXED` value will change even if other instance change
- [Component] Pickable: `CHANGED` style change
- [Component] Rate: `CHANGED` style change
- [General] add new component `Icon`


## 0.8.4

`2017-03=17`

- [Component] Album: `FIXED` empty children will cause error.
- [Component] Calendar: `CHANGED` base style change
- [Component] CascadeSelect: `FIXED`: display selection text immediately when the `changeOnSelect=true`
- [Component] CascadeSelect: `FIXED`: `dropDownWidth` prop type check.
- [Component] CascadeSelect: `NEW`: new prop, `dropDownWidth`(number): define the dropdown width.
- [Component] CascadeSelect: `NEW`: new display mode, `miniMode=false` will display the rich style with button and selection.
- [Component] Form: `FIXED` fix border-radius bug in searchFormField
- [Component] Table: `FIXED` scrolling to right end will cause unaligned header & body


## 0.8.3

`2017-03-09`

- [Component] CascadeMultiSelect: `FIXED` footer's button click, dropdown not hidden
- [Component] CascadeMultiSelect: `FIXED` demo async options error
- [Component] CascadeMultiSelect: `FIXED` demo input value sync update error
- [Component] Form: `CHANGED` apply special border style for EditorFormField
- [Component] Form: `FIXED` input border color difference.

## 0.8.1

`2017-03-08`

- [Component] Form: `FIXED` fix checkbox/radio view bug if there is only one child
- [Component] CascadeMultiSelect: `FIXED` Button style bug

## 0.8.0

`2017-03-06`

- [General] base style element defination change, including input/textarea/button/color.
- [Component] Button: `NEW` support 'loading' prop
- [Component] Dialog: `CHANGED` new style
- [Component] Form: `CHANGED` change color if count overflow;
- [Component] Form: `CHANGED` tips style optimaztion
- [Component] Form: `CHANGED` change textarea count style
- [Component] Select2: `CHANGED` box-shadow & border-radius change
- [Component] Tabs: `NEW` apply new style
- [Component] CascadeMultiSelect: `NEW` add ok button
- [Component] CascadeMultiSelect: `FIXED` missing style
- [Component] CascadeMultiSelect: `CHANGED` onSelect will pass leafList

## 0.7.6

`2017-03-03`

- [Component] Calendar: `NEW` add new sub Component `RangeCalendar`
- [Component] Calendar: `CHANGED` default `yearSelectOffset` & `yearSelectTotal` change
- [Component] CascadeMultiSelect: `NEW` modal view
- [Component] CascadeMultiSelect: `FIXED` props.value rerender error
- [Component] CascadeSelect: `NEW` Pass `[key]` as the value will be treated as the choosed leaf - [Component] Dialog:*key**.
- [Component] CascadeSelect: `FIXED` `e.stopPropagation()` when click the clear button.
- [Component] CheckboxGroup: `CHANGED` margin is adjusted
- [Component] RadioGroup: `CHANGED` margin is adjusted
- [Component] FloatNav: `FIXED` expection when content is empty.
- [Component] FloatNav: `FIXED` update height when props.height changed
- [Component] Form: `NEW` `CascadeSelectFormField` support `getPopupContainer`
- [Component] Message: `NEW` add new props `getContainer`
- [Component] Message: `NEW` add new props `multipleInstance`
- [Component] Message: `NEW` add new API `clear()`
- [Component] Table: `FIXED` remove useless code in `Cell` componentDidMount 

## 0.7.5

`2017-02-23`

- [Component] Button: `CHANGED` use normal component declaration instead of `stateless function`
- [Component] Table: `CHANGED` show emptyData if fetch errors
- [Component] Table: `CHANGED` action hoverMenu will be hiden if a menu item is clicked.
- [Component] FloatNav: `CHANGED` adjust scroll position when clicked items.
- [Component] Form: `CHANGED` `CheckboxFormField` show key if label is not found in view mode
- [Component] Form: `CHANGED` `RadioFormField` show key if label is not found in view mode

## 0.7.4

`2017-02-21`

- [General] add new component `FloatNav` `Matrix` & `Timeline`

## 0.7.1

`2017-02-17`

- [HotFix] Calendar: style bug
- [Component] TreeSelect: `CHANGED` add new prop `resultsPanelAllClearBtn` , `resultsPanelTitle`, `resultsPanelTitleStyle` & `filterResultsPanel` 

## 0.7.0

`2017-02-16`

- [Component] Calendar: `NEW` new style & timePicker
- [Component] Dialog: `CHANGED` use global transition ease
- [Component] Form: `CHANGED` update `uxcore-date-form-field` to ~0.7.0
- [Component] Message: `CHANGED` new animation
- [Component] Popover: `CHANGED` animation direction change
- [Component] Popover: `CHANGED` use global transition ease
- [Component] Table: `CHANGED` update `uxcore-date-cell-field` to ^0.3.0
- [Component] Tooltip: `CHANGED` use global transition ease
- [Component] Tooltip: `CHANGED` change animation directions
- [General] add new component `CascadeMultiSelect`

## 0.6.1

`2017-02-10`

- [Component] CascadeSelect: `NEW` add new prop `getPopupContainer`
- [Component] Pagination: `NEW` add new Prop `getSelectPopupContainer`

## 0.6.0

`2017-01-26`

- [Component] Dialog: `CHANGED` improved `getContainer`
- [Component] Form: `FIXED` cascadeSelectFormField can not be reset## 1.14.3
- [Component] Form: `CHANGED` use user-specified FormRow key
- [Component] Table: `CHANGED` `moveRowUp` & `moveRowDown` support tree mode.
- [Component] Table: `CHANGED` only show fixedTable when data exists
- [Component] Table: `CHANGED` refactor fixed column render logic
- [Component] Table: `NEW` support `column.rightFixed`
- [Component] Table: `NEW` inline edit API support callback.
- [Component] Totop: `NEW` add new prop `onTotopEnd`
- [Component] Totop: `CHANGED` update `uxcore-popover` to `~0.4.0`
- [Component] Totop: `CHANGED` use `unstable_renderSubtreeIntoContainer`



### BEAKING CHANGES

- [Component] Table: `CHANGED` `subComp` logic is removed, use `renderSubComp` instead.



## 0.5.2

`2017-01-20`

- [HotFix] add `uxcore.less` `core.less` in compatible style pack.

## 0.5.1

`2017-01-20`

- [Component] Dialog: `NEW` add new Prop `getContainer`
- [General] add new component `Splitter`


## 0.5.0

`2017-01-16`

- [Component] Animate: `NEW` add fadeOut/slideOutDown
- [Component] Calendar: `NEW` new animation
- [Component] Carousel:`CHANGED` add background transition
- [Component] Album: `NEW` new animation
- [Component] Dialog: `NEW` new animation
- [Component] Dropdown: `NEW` new animation
- [Component] Menu: `NEW` new animation
- [Component] Popover: `NEW` new animation
- [Component] Select: `NEW` new animation
- [Component] Table: `NEW` new animation
- [Component] Tabs: `NEW` new animation
- [Component] Tooltip: `NEW` new animation
- [Component] Rate: `FIXED` server render support
- [Component] Rate: `FIXED` IE compatible bug
- [Tools] Formatter: `CHANGED` use default delimeter only delimeter is undefined
- [Component] MultiSelect: `CHANGED` hide footer if nothing need to be shown


## 0.4.7

`2017-01-12`

- [HotFix] fix compitable style svg path error

## 0.4.6

`2017-01-04`

- [General] add new component `EmptyData`
- [Component] Carousel: `CHANGED` props `arrows` can be `always/hover`
- [Component] Carousel: `CHANGED` change default ease to `ease-out`
- [Component] CascadeSelect: `FIXED` even if default value is error, options should show correctly [#11](https://github.com/uxcore/uxcore-cascade-select/issues/11)
- [Component] CascadeSelect: `FIXED` throw error if options cannot match value [#9](https://github.com/uxcore/uxcore-cascade-select/issues/9)
- [Component] Form: `CHANGED` checkbox & radio style change
- [Component] Formatter: `CHANGED` use default delimeter only delimeter is undefined
- [Component] Switch: `FIXED` style when content overflow
- [Component] Table: `NEW` add new prop `rowSelection.isDisabled`
- [Component] Table: `FIXED` `column.rules` fail to work in `SelectCellField`
- [Component] Tree: `FIXED` server render bug (missing document)
- [Component] Tree: `FIXED` Table depends on refs.tree


## 0.4.5

`2016-12-27`

- [Component] Album: `NEW` API support img list & thumbnails
- [Component] Calendar: `NEW` add new method `getTriggerNode`
- [Component] CheckboxGroup: `CHANGED` type of value can be `number` or `string`
- [Component] Dialog: `CHANGED` default texts of buttons change 
- [Component] Dialog: `FIXED` position bug in IE browser
- [Component] Form: `CHANGED` add new API `createFormField`
- [Component] Form: `CHANGED` update `uxcore-date-form-field` to ~0.5.0 
- [Component] Form: `FIXED` textarea height bug [#121](https://github.com/uxcore/uxcore-form/issues/121)
- [Component] Form: `CHANGED` EditorFormField add new API `setContent`
- [Component] Mention: `CHANGED` editor's width propType.
- [Component] Mention: `CHANGED` add value props.
- [Component] Menu: `NEW` add new style `kuma-menu-none-border`
- [Component] Progress: `FIXED` vertical align of the text with the line. 
- [Component] Table: `NEW` add type `check` to support inline checkbox editing
- [Component] Table: `NEW` add new API `moveRowUp` & `moveRowDown`
- [Component] Table: `NEW` new API `createCellField`
- [Component] Table: `CHANGED` `SelectCellField` support `searchDelay` in order to optimize search performance
- [Component] Table: `CHANGED` move all APIs to `methods.js`
- [Component] Table: `CHANGED` RadioCellField support `config.data`
- [Component] Table: `CHANGED` more powerful SelectCellField
- [Component] Table: `CHANGED` add DateCellField
- [Component] Table: `CHANGED` depend on `uxcore-cell-field`
- [Component] Table: `FIXED` onPagerChange fail to be triggered in fetchLocalData mode.
- [Component] Transfer: `CHANGED` remove head background color
- [Component] Transfer: `CHANGED` fix Transfer width to 380px
- [Component] Transfer: `CHANGED` search input placeholder
- [Component] Transfer: `FIXED` fix bug in locateItem, index do not match
- [Component] Tree: `FIXED` server render support [#3](https://github.com/uxcore/uxcore-tree/issues/3)
- [Component] TreeSelect: `FIXED` add missing loading icon.


## 0.4.4

`2016-12-01`

- [Component] Album: `CHANGED` `thumbPlacement` support `bottom/top` 
- [Component] Album: `NEW` add direct method to Album which can make the component be using easily more widely.
- [Component] Calendar: `FIXED` can not reset input value if value is null in React@15.x
- [Component] Carousel: `CHANGED` support new props `largeArrowsAndDots` & `centerDots`
- [Component] Carousel: `CHANGED` update react-slick to ~0.14.0
- [Component] CascadeSelect: `CHANGED` another efficient way to fix issue #7
- [Component] CascadeSelect: `CHANGED` subMenu won't be hide before selected options's length is larger than cascadeSize when cascadeSize is not equal to options level. [#7](https://github.com/uxcore/uxcore-cascade-select/issues/7)
- [Component] CascadeSelect: `FIXED` add support for browsers that does not implement array.prototype.find. 
- [Component] CascadeSelect: `CHANGED` beforeRender default value optimazition
- [Component] CascadeSelect: `FIXED` input height bug
- [Component] Dialog: `CHANGED` remove loading props on button  
- [Component] Dialog: `NEW` props `htmlClassName`
- [Component] Dialog: `FIXED` if html overflow is scroll, dialog can be scrolled as well.
- [Component] Form: `CHANGED` add subComp TextAreaCount for TextAreaFormField
- [Component] Form: `CHANGED` RadioFormField support `jsxdisabled`
- [Component] Form: `CHANGED` EditorFormField jsxcontent is deprecated. use jsxvalues directly.
- [Component] Form: `CHANGED` getValues method will return a promise if asyncValidate is true 
- [Component] Form: `FIXED` searchFormField lineHeight bug
- [Component] Form: `NEW` add new prop `asyncValidate`
- [Component] Mention: `FIXED` click on the contentEditable's placeholder, the editor can't focus. 
- [Component] Menu: `CHANGED` to rc-menu@4.13.0
- [Component] Message: `CHANGED` change `z-index` to 1070
- [Component] Pickable: `CHANGED` small style change in hook mode 
- [Component] Popover: `FIXED` prop `delay` fail to work
- [Component] Popover: `CHANGED` new scaffold
- [Component] Popover: `CHANGED` airbnb javascript style lint
- [Component] Radiogroup: `CHANGED` support new props `disabled`
- [Component] Steps: `FIXED` style bug when only one step set description
- [Component] Table: `FIXED` setState may be triggered in componentWillMount
- [Component] Table: `FIXED` rowData passed in method `addRowClassName` may be undefined
- [Component] Table: `FIXED` SelectCellField: bug when value is undefined
- [Component] Table: `FIXED` multiline reset is not thorough
- [Component] Table: `CHANGED` set default labelInValue in SelectCellField 
- [Component] Table: `CHANGED` new empty data
- [Component] Table: `CHANGED` action will not render if render function return false [#158](https://github.com/uxcore/uxcore-table/issues/158)
- [Component] Table: `FIXED` props `levels` fail to work [#157](https://github.com/uxcore/uxcore-table/issues/157)
- [Component] Tabs: `FIXED` brick & filter style bug
- [Component] Tabs: `FIXED` fix border-bottom style bug ([#13](https://github.com/uxcore/uxcore-tabs/issues/13))
- [Component] Tabs: `CHANGED` set the height of the tabpane to 0 when inactive
- [Component] Tabs: `NEW` support switch when the number of items is too large
- [Component] Tree: `FIXED` loading icon missing
- [Component] Uploader: `FIXED` fix file.response.getJson bug when upload fails.

## 0.4.3

`2016-11-02`

- [Component] Table: `CHANGED` actionBar button type (the first is outline  & others are secondary)
- [Component] Table: `CHANGED` change header title font-size to 14px
- [Component] Table: `CHANGED` lint (reduce errors numbrt to 24)
- [Component] Table: `CHANGED` change tree icon in subComp mode.
- [Component] Table: `CHANGED` `column.collapseNum` will support string
- [Component] Table: `CHANGED` new action column
- [Component] Table: `CHANGED` new column picker
- [Component] Table: `CHANGED` js style standardization `Cell/index`, `ActionBar`, `SearchBar`
- [Component] Table: `CHANGED` replace `deepcopy` with `lodash/cloneDeep`
- [Component] Table: `CHANGED` order icon change
- [Component] Table: `NEW` add link bar
- [Component] Table: `FIXED` columnPicker can hide all columns.
- [Component] Table: `FIXED` treeIcon cell should not has right border when className is kuma-uxtable-border-line.
- [Component] Table: `FIXED` body width calculation bug when there is fixed columns & width is not defined.
- [Component] Table: `FIXED` bodyHeight calculation bug [#132](https://github.com/uxcore/uxcore-table/issues/132)
- [Component] Table: `FIXED` emptyText lineHeight calculation bug [#133](https://github.com/uxcore/uxcore-table/issues/133)
- [Component] Album: `NEW` Add thumbnails
- [Component] Calendar: `FIXED` text-indent cause scroll issue.
- [Component] Carousel: `CHANGED` update react-slick to ~0.14.0
- [Component] Dialog: `CHANGED` set `vertical-center-dialog` as default wrapClassName
- [Component] Mention: `FIXED` inputEditor & textareaEditor trigger change event when mention addded.
- [Component] Mention: `FIXED` issue when mention's 'matchRange' props start from 0.
- [Component] Mention: `CHANGED` change panel's position with inputEditor & textareaEditor.
- [Component] Mention: `FIXED` fixed 'onChange' not trigger in inputEditor & textareaEditor.  
- [Component] Steps: `FIXED` missing react import
- [Component] Tabs: `NEW` support switch when the number of items is too large
- [Component] Tree: `FIXED` fix arraysEqual missing 
- [Component] Tree: `CHANGED` rewrite rc-tree render logic, move supportSvg judge to `render`
- [Component] Uploader: `FIXED` fix file.response.getJson bug when upload fails.

## 0.4.2

`2016-10-25`

- [Component] Form: `NEW` add new FormField `PickableFormField`
- [Component] Form: `CHANGED` update `PickableFormField` to ~0.2.0
- [Component] Form: `CHANGED` CascadeSelectFormField support `allowClear`
- [Component] Form: `CHANGED` update `uxcore-date-form-field` to ~0.4.0
- [Component] Calendar: `NEW` new props `showSecond` `showHour`
- [Component] Calendar: `FIXED` missing method `getTimeConfig` 
- [Component] Calendar: `CHANGED` add prop `timezone` to fix calendar timezone
- [Component] Calendar: `CHANGED` all panel support clear icon

## 0.4.1

`2016-09-20`

- [General] `NEW` add new component `Album` 

## 0.4.0

`2016-09-01`

- [Component] Calendar: `FIXED` fix select time btn style bug
- [Component] Carousel: `FIXED` fix issue [#2](https://github.com/uxcore/uxcore-carousel/issues/2)
- [Component] Carousel: `CHANGED` new style
- [Component] Carousel: `CHANGED` update react-slick to ~0.12.0
- [Component] Collapse: `CHANGED` update UI
- [Component] Dropdown: `CHANGED` add animation
- [Component] Form: `CHANGED` support Child is null
- [Component] Form: `CHANGED` doValidate support param `always` which make doValidate always set the field error state to true/false.
- [Component] Form: `FIXED` fix server render bug 
- [Component] Formatter: `CHANGED` date method can handle undefined/null properly  
- [Component] Menu: `CHANGED` style change
- [Component] Pagination: `CHANGED` update dependency `uxcore-select` to ~0.3.0
- [Component] Pagination: `FIXED` fix pagination size changer style bug
- [Component] Pickable: `NEW` add new type hook
- [Component] Rate: `FIXED` always style bug [#8](https://github.com/uxcore/uxcore-rate/issues/8)
- [Component] Rate: `NEW` add prop tipShow
- [Component] Rate: `CHANGED` all stars before the one hovered should be acitve. (#4)
- [Component] Select: `FIXED` selected value text overflow (uxcore [#13](https://github.com/uxcore/uxcore/issues/13))
- [Component] Select: `FIXED` placeholder style bug in multiple mode
- [Component] Select: `FIXED` dropdown menu will be hidden when drag scrollbar in IE. [#15](https://github.com/uxcore/uxcore-select2/issues/15)
- [Component] Select: `FIXED` fix selected value style bug
- [Component] Select: `CHANGED` update dependency `rc-select` to ~6.4.0
- [Component] Steps: `FIXED` export bug
- [Component] Steps: `FIXED` add props `className`.
- [Component] Steps: `FIXED` style issue under IE8.
- [Component] Table: `CHANGED` change default fitResponse 
- [Component] Table: `CHANGED` support column.collapseNum
- [Component] Table: `CHANGED` table will listen props.fetchParams change.
- [Component] Table: `FIXED` fetchData caused by fetchParams change will pass the out-dated params.
- [Component] Table: `FIXED` saveRow bug [#155](https://github.com/uxcore/uxcore-table/issues/155)
- [Component] Table: `FIXED` missing deepcopy protect when passing parma in column.action. [#154](https://github.com/uxcore/uxcore-table/issues/154)
- [Component] Tabs: `NEW` support prop className 
- [Component] Totop: `CHANGED` new style
- [Component] Transfer: `FIXED` fix bug in locateItem and _removeJustMoved
- [Component] Transfer: `CHANGED` apply new style
- [Component] Transfer: `CHANGED` add `height` props
- [Component] Tree: `CHANGED` update rc-tree to ~1.1.0
- [Component] Uploader: `FIXED` fix `preventDuplicate`

`2016-08-11`

- [Component] Dialog: `NEW` upgrade to rc-dialog@0.6.2
- [Component] Dialog: `NEW` support center vertically 
- [Component] Dialog: `FIXED` when confirmbox's title or content is english words, the line would not break.  
- [Component] Table: `NEW` new tree select mode (support checked/unchecked/halfchecked)
- [Component] Table: `NEW` add new prop `onSearch` `onOrder` `onPagerChange`
- [Component] Table: `NEW` add new prop `isMiniPager` & `showPagerSizeChanger`
- [Component] Table: `NEW` support column group
- [Component] Table: `NEW` support column tilte custom render 
- [Component] Table: `CHANGED` tree mode style improve
- [Component] Table: `CHANGED` remove props.passedData support
- [Component] Table: `CHANGED` little change in tree mode style
- [Component] Table: `CHANGED` replace half-checked icon with svg
- [Component] Table: `CHANGED` recover the logic about passedData in fetchData method.
- [Component] Table: `CHANGED` update `uxcore-select2` to ~0.3.0
- [Component] Table: `CHANGED` column.renderChildren will pass rowData to user.
- [Component] Table: `CHANGED` jQuery free!
- [Component] Table: `FIXED` even row calculation bug
- [Component] Table: `FIXED` fix bug in `column.isDisable`
- [Component] Table: `FIXED` fix bug that columnPicker can make all coloumns hidden (#140)
- [Component] Table: `FIXED` fix bug that columnPicker will show checkbox row when checkbox is user-defined.
- [Component] Form: `NEW` add renderView prop in InputFormField
- [Component] Form: `NEW` add SwitchFormField
- [Component] Form: `CHANGED` CascadeFormField support multiple placeholders.
- [Component] Form: `CHANGED` Form doValidate will pass the field whose jsxshow is false.
- [Component] Form: `CHANGED` remove ve support !
- [Component] Form: `CHNAGED` change dependency `uxcore-select2` to ~0.3.0
- [Component] Form: `CHNAGED` change dependency `uxcore-select-form-field` to ~0.2.0
- [Component] Form: `CHANGED` change dependency `uxcore-date-form-field` to ~0.3.0
- [Component] Form: `CHANGED` add labelMatchInputHeight support (style) [#111](https://github.com/uxcore/uxcore-form/issues/111)
- [Component] Form: `FIXED` fix label style bug in IE/FireFox
- [Component] Calendar: `NEW` add polish support.
- [Component] Calendar: `NEW` add new prop `inputWidth` for adjusting the trigger width.
- [Component] Calendar: `CHANGED` update dependency `rc-calendar` to ~6.0.0
- [Component] Select: `CHANGED` new dev tool
- [Component] Select: `CHANGED` repository
- [Component] Select: `CHANGED` update dependency `rc-select` to ~6.4.0
- [Component] Select: `FIXED` fix selected value style bug
- [Component] Select: `FIXED` dropdown menu will be hidden when drag scrollbar in IE. [#15](https://github.com/uxcore/uxcore-select2/issues/15)
- [Component] Mention: `FIXED` fixed the select panel's position error when the page is scrolled.
- [Component] Mention: `CHANGED` Separate editor from mention component with three types
- [Component] Mention: `NEW` props `delimiter` `readOnly` `defaultValue` `onAdd`
- [Component] Mention: `NEW` add `tinymce` support
- [Component] Mention: `NEW` add `placeholder` supports





## 0.3.3

`2016-07-29`

- [General] `FIXED` fix bug imported from rc-dropdown

## 0.3.2

`2016-07-27`

- [General] `FIXED` move uxcore component from devDependency to dependency

## 0.3.1

`2016-07-22`

- [General] support import single component from uxcore

## 0.3.0

`2016-07-05`

- [Component] Dialog: `FIXED` remove console
- [Component] Dialog: `NEW` add polish support.
- [Component] Uploader: `CHANGED` queueCapacity will concern props.fileList
- [Component] Uploader: `FIXED` fix issue [#15](https://github.com/uxcore/uxcore-uploader/issues/15) [#16](https://github.com/uxcore/uxcore-uploader/issues/16) [#17](https://github.com/uxcore/uxcore-uploader/issues/17)
- [Component] Uploader: `CHANGED` add className for download & preview button
- [Component] Uploader: `CHANGED` remove Progress.isSupport
- [Component] Uploader: `NEW` add server render support
- [Component] Uploader: `CHANGED` add download property in download link
- [Component] Uploader: `FIXED` fix response process bug.
- [Component] Uploader: `CHANGED` cancel icon style fix (#24)
- [Component] Uploader: `NEW` add polish support.
- [Component] Tag: `NEW` add polish support
- [Component] Calendar: `NEW` add polish support.
- [Component] Form: `CHANGED` do not trigger jsxonChange when resetValues() & setValues() & jsxvalues change.


## 0.2.3

`2016-06-29`

- [Component] TextAreaFormField: `FIX` fix server render bug
- [Component] Form: `CHANGED` update tinymce dependency to ~0.2.0
- [Component] Form: `CHANGED` add warning in ButtonGroupFormField
- [Component] Form: `FIX` fix server render bug

## 0.2.2

`2016-06-24`

- [General] build kuma with component
- [Component] add new component tag, tree-select, multi-select & animate

## 0.2.1

`2016-06-07`

- [General] change libraryTarget config in webpack config.

