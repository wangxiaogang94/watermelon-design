"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var text = _ref.text;
  return _react.default.createElement("button", {
    className: "wm-btn"
  }, "\u8FD9\u662F\u4E2A\u6309\u94AE", text);
};

var _default = Button;
exports.default = _default;