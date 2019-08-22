"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var fileToBase64 = function fileToBase64(file, func) {
  var reader = new FileReader();
  reader.addEventListener('load', function () {
    var result = reader.result;
    func(result);
  });
  reader.readAsDataURL(file);
};

var _default = fileToBase64;
exports.default = _default;