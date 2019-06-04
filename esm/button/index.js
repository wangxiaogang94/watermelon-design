import React from 'react';
import './index.css';

var Button = function Button(_ref) {
  var text = _ref.text;
  return React.createElement("button", {
    className: "wm-btn"
  }, "\u8FD9\u662F\u4E00\u4E2A\u6309\u94AE", text);
};

export default Button;