"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var WaterMark =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(WaterMark, _React$PureComponent);

  function WaterMark() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, WaterMark);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WaterMark)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "el", document.createElement('div'));

    _defineProperty(_assertThisInitialized(_this), "state", {
      image: ''
    });

    _defineProperty(_assertThisInitialized(_this), "getLength", function (str) {
      // const str = new String(val);  
      var bytesCount = 0;

      for (var i = 0, n = str.length; i < n; i++) {
        var c = str.charCodeAt(i);

        if (c >= 0x0001 && c <= 0x007e || 0xff60 <= c && c <= 0xff9f) {
          bytesCount += 1;
        } else {
          bytesCount += 2;
        }
      }

      return bytesCount;
    });

    _defineProperty(_assertThisInitialized(_this), "setWatermark", function (text) {
      var angle = _this.props.angle;
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      var leng = Math.sqrt(Math.pow(32 * _this.getLength(text), 2), Math.pow(32, 2)) + 32 * 4;
      canvas.width = leng;
      canvas.height = leng / 2 + 32 * 2;
      ctx.translate(leng / 2, leng / 4);
      ctx.rotate(angle * Math.PI / 180);
      ctx.font = '32px Arial';
      ctx.fillStyle = 'rgba(127, 127, 127, .3)';
      ctx.fillText(text, -leng / 2 + 32 * 2, 0);
      var image = canvas.toDataURL('image/png', 1);

      _this.setState({
        image: image
      });
    });

    return _this;
  }

  _createClass(WaterMark, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.appendChild(this.el);
      var text = this.props.text;
      this.setWatermark(text);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var text = this.props.text;
      this.setWatermark(text);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.removeChild(this.el);
    }
  }, {
    key: "render",
    value: function render() {
      var isWatermark = this.props.isWatermark;
      var image = this.state.image;

      if (isWatermark) {
        return _reactDom.default.createPortal(_react.default.createElement("div", {
          style: {
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 99999,
            pointerEvents: 'none',
            width: '100vw',
            height: '100vh',
            backgroundImage: "url(".concat(image, ")")
          }
        }), this.el);
      }

      return null;
    }
  }]);

  return WaterMark;
}(_react.default.PureComponent);

_defineProperty(WaterMark, "defaultProps", {
  text: '请设置水印文字',
  isWatermark: false,
  angle: -30
});

var watermark = new WaterMark();
window.watermark = watermark;
var _default = WaterMark;
exports.default = _default;