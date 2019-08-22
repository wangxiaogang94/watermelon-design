"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactGridGallery = _interopRequireDefault(require("react-grid-gallery"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ImageList =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ImageList, _React$PureComponent);

  function ImageList(props) {
    var _this;

    _classCallCheck(this, ImageList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageList).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onSelectImage", function (index) {
      var IMAGES = _this.state.IMAGES;
      console.log('IMAGES=====', IMAGES);

      _this.setState({
        IMAGES: IMAGES.map(function (v, i) {
          return i === index ? _objectSpread({}, v, {
            isSelected: true
          }) : v;
        })
      });
    });

    _this.state = {
      IMAGES: [{
        src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
        thumbnail: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg',
        isSelected: true,
        caption: 'After Rain (Jeshu John - designerspics.com)'
      }, {
        src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
        thumbnail: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
        // tags: [{ value: 'Ocean', title: 'Ocean' }, { value: 'People', title: 'People' }],
        caption: 'Boats (Jeshu John - designerspics.com)'
      }, {
        src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
        thumbnail: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
        caption: 'Color Pencils (Jeshu John - designerspics.com)'
      }, {
        src: 'https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg',
        thumbnail: 'https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_n.jpg',
        caption: 'Red Apples with other Red Fruit (foodiesfeed.com)'
      }, {
        src: 'https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg',
        thumbnail: 'https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_n.jpg',
        caption: '37H (gratispgraphy.com)'
      }, {
        src: 'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg',
        thumbnail: 'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg',
        // tags: [{ value: 'Nature', title: 'Nature' }],
        caption: '8H (gratisography.com)'
      }, {
        src: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg',
        thumbnail: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg',
        caption: '286H (gratisography.com)'
      }, {
        src: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg',
        thumbnail: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg',
        // tags: [{ value: 'People', title: 'People' }],
        caption: '315H (gratisography.com)'
      }, {
        src: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg',
        thumbnail: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg',
        caption: '201H (gratisography.com)'
      }, {
        src: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
        alt: 'Big Ben - London',
        thumbnail: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg',
        caption: 'Big Ben (Tom Eversley - isorepublic.com)'
      }, {
        src: 'https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg',
        alt: 'Red Zone - Paris',
        thumbnail: 'https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg',
        // tags: [{ value: 'People', title: 'People' }],
        caption: 'Red Zone - Paris (Tom Eversley - isorepublic.com)'
      }, {
        src: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg',
        alt: 'Wood Glass',
        thumbnail: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg',
        caption: 'Wood Glass (Tom Eversley - isorepublic.com)'
      }, {
        src: 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg',
        thumbnail: 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg',
        caption: 'Flower Interior Macro (Tom Eversley - isorepublic.com)'
      }, {
        src: 'https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_b.jpg',
        thumbnail: 'https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_n.jpg',
        caption: 'Old Barn (Tom Eversley - isorepublic.com)'
      }, {
        src: 'https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_b.jpg',
        alt: 'Cosmos Flower',
        thumbnail: 'https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_n.jpg',
        caption: 'Cosmos Flower Macro (Tom Eversley - isorepublic.com)'
      }, {
        src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
        thumbnail: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg'
      }]
    };
    return _this;
  }

  _createClass(ImageList, [{
    key: "render",
    value: function render() {
      var imgs = this.state.IMAGES.map(function (v) {
        return _objectSpread({}, v, {
          thumbnailWidth: 200,
          thumbnailHeight: 200
        });
      });
      return _react.default.createElement(_reactGridGallery.default, {
        images: imgs,
        onSelectImage: this.onSelectImage
      });
    }
  }]);

  return ImageList;
}(_react.default.PureComponent);

var _default = ImageList;
exports.default = _default;