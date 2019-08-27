"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactColor = require("react-color");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var noop = function noop() {};

var pickers = {
  chrome: _reactColor.ChromePicker,
  sketch: _reactColor.SketchPicker
};

var ColorPicker =
/*#__PURE__*/
function (_Component) {
  _inherits(ColorPicker, _Component);

  function ColorPicker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ColorPicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ColorPicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      displayColorPicker: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      var displayColorPicker = _this.state.displayColorPicker;

      _this.setState({
        displayColorPicker: !displayColorPicker
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      _this.setState({
        displayColorPicker: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (color) {
      var onChange = _this.props.onChange;

      _this.setState({
        color: color.hex
      });

      onChange(color.hex, color);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeComplete", function (color) {
      var onChangeComplete = _this.props.onChangeComplete;

      _this.setState({
        color: color.hex
      });

      onChangeComplete(color.hex);
    });

    return _this;
  }

  _createClass(ColorPicker, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          small = _this$props.small,
          type = _this$props.type,
          position = _this$props.position;
      var _this$state = this.state,
          color = _this$state.color,
          displayColorPicker = _this$state.displayColorPicker;
      var Picker = pickers[type];
      var styles = {
        color: {
          width: small ? '80px' : '120px',
          height: small ? '16px' : '24px',
          borderRadius: '2px',
          background: color
        },
        swatch: {
          padding: '4px',
          background: '#fff',
          borderRadius: '2px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer'
        },
        popover: {
          position: 'absolute',
          zIndex: '2'
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px'
        },
        wrapper: {
          position: 'inherit',
          zIndex: '100'
        }
      };

      if (position === 'top') {
        styles.wrapper.transform = 'translateY(-100%)';
        styles.wrapper.paddingBottom = 8;
      }

      var swatch = _react.default.createElement("div", {
        style: styles.swatch,
        onClick: this.handleClick
      }, _react.default.createElement("div", {
        style: styles.color
      }));

      var picker = displayColorPicker ? _react.default.createElement("div", {
        style: styles.popover
      }, _react.default.createElement("div", {
        style: styles.cover,
        onClick: this.handleClose
      }), _react.default.createElement("div", {
        style: styles.wrapper
      }, _react.default.createElement(Picker, _extends({}, this.props, {
        color: color,
        onChange: this.handleChange,
        onChangeComplete: this.handleChangeComplete
      })))) : null;

      if (position === 'top') {
        return _react.default.createElement("div", null, picker, swatch);
      }

      return _react.default.createElement("div", null, swatch, picker);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props) {
      if ('color' in props) {
        return {
          color: props.color
        };
      }

      return null;
    }
  }]);

  return ColorPicker;
}(_react.Component);

exports.default = ColorPicker;

_defineProperty(ColorPicker, "defaultProps", {
  onChange: noop,
  onChangeComplete: noop,
  position: 'bottom'
});