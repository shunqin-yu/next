import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _class, _temp;

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Table.Column
 * @order 0
 **/
var Column = (_temp = _class = function (_React$Component) {
  _inherits(Column, _React$Component);

  function Column() {
    _classCallCheck(this, Column);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Column.prototype.render = function render() {
    return null;
  };

  return Column;
}(React.Component), _class.propTypes = {
  /**
   * 指定列对应的字段，支持`a.b`形式的快速取值
   */
  dataIndex: PropTypes.string,
  /**
   * 行渲染的逻辑
   * value, rowIndex, record, context四个属性只可读不可被更改
   * Function(value, index, record) => Element
   */
  cell: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.func]),
  /**
   * 表头显示的内容
   * value, rowIndex, record, context四个属性只可读不可被更改
   */
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.func]),
  /**
   * 是否支持排序
   */
  sortable: PropTypes.bool,
  /**
   * 列宽，注意在锁列的情况下一定需要配置宽度
   */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * 单元格的对齐方式
   */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  /**
   * 生成标题过滤的菜单, 格式为`[{label:'xxx', value:'xxx'}]`
   */
  filters: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
  })),
  /**
   * 过滤的模式是单选还是多选
   */
  filterMode: PropTypes.oneOf(['single', 'multiple']),
  /**
   * 是否支持锁列,可选值为`left`,`right`, `true`
   */
  lock: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /**
   * 是否支持列宽调整, 当该值设为true，table的布局方式会修改为fixed.
   */
  resizable: PropTypes.bool
}, _class.contextTypes = {
  parent: PropTypes.any
}, _class.defaultProps = {
  cell: function cell(value) {
    return value;
  },
  filterMode: 'multiple',
  resizable: false
}, _class._typeMark = 'column', _temp);
Column.displayName = 'Column';
export { Column as default };