"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var isDefined = function isDefined(value) {
  return value != null;
};

var defaultSettings = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  spacing: 8
};

var StyledResponsiveGrid = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .container {\n    display: flex;\n    justify-content: center;\n    padding: ", "px;\n  }\n\n  .row {\n    width: 100%;\n    display: block;\n    clear: both;\n    margin-left: -5px;\n    margin-right: 5px;\n    margin-top: -5px;\n    margin-bottom: 5px;\n  }\n\n  .centered {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n  }\n\n\n  .col-xs-1,\n  .col-xs-2,\n  .col-xs-3,\n  .col-xs-4,\n  .col-xs-5,\n  .col-xs-6,\n  .col-xs-7,\n  .col-xs-8,\n  .col-xs-9,\n  .col-xs-10,\n  .col-xs-11,\n  .col-xs-12 {\n    box-sizing: border-box;\n    display: inline-block;\n    zoom: 1;\n    letter-spacing: normal;\n    word-spacing: normal;\n    vertical-align: top;\n    text-rendering: auto;\n    padding: ", "px;\n  }\n\n  .hidden-xs {\n    display: none;\n  }\n  .visible-xs {\n    display: block;\n  }\n\n  .col-xs-1 {\n    width: 8.33%;\n  }\n\n  .col-xs-2 {\n    width: 16.66%;\n  }\n\n  .col-xs-3 {\n    width: 25%;\n  }\n\n  .col-xs-4 {\n    width: 33.33%;\n  }\n\n  .col-xs-5 {\n    width: 41.66%;\n  }\n\n  .col-xs-6 {\n    width: 50%;\n  }\n\n  .col-xs-7 {\n    width: 58.33%;\n  }\n\n  .col-xs-8 {\n    width: 66.66%;\n  }\n\n  .col-xs-9 {\n    width: 75%;\n  }\n\n  .col-xs-10 {\n    width: 83.33%;\n  }\n\n  .col-xs-11 {\n    width: 91.66%;\n  }\n\n  .col-xs-12 {\n    width: 100%;\n  }\n}\n\n@media all and (min-width: ", "}px) {\n  .col-sm-1,\n  .col-sm-2,\n  .col-sm-3,\n  .col-sm-4,\n  .col-sm-5,\n  .col-sm-6,\n  .col-sm-7,\n  .col-sm-8,\n  .col-sm-9,\n  .col-sm-10,\n  .col-sm-11,\n  .col-sm-12 {\n    box-sizing: border-box;\n    display: inline-block;\n    zoom: 1;\n    letter-spacing: normal;\n    word-spacing: normal;\n    vertical-align: top;\n    text-rendering: auto;\n    padding: ", "}px;\n  }\n\n  .hidden-sm {\n    display: none;\n  }\n  .visible-sm {\n    display: block;\n  }\n}\n\n@media all and (min-width: ", "}px) {\n  .col-md-1,\n  .col-md-2,\n  .col-md-3,\n  .col-md-4,\n  .col-md-5,\n  .col-md-6,\n  .col-md-7,\n  .col-md-8,\n  .col-md-9,\n  .col-md-10,\n  .col-md-11,\n  .col-md-12 {\n    box-sizing: border-box;\n    display: inline-block;\n    zoom: 1;\n    letter-spacing: normal;\n    word-spacing: normal;\n    vertical-align: top;\n    text-rendering: auto;\n    padding: ", "}px;\n  }\n\n  .hidden-md {\n    display: none;\n  }\n  .visible-md {\n    display: block;\n  }\n}\n\n@media all and (min-width: ", "}px) {\n  .col-lg-1,\n  .col-lg-2,\n  .col-lg-3,\n  .col-lg-4,\n  .col-lg-5,\n  .col-lg-6,\n  .col-lg-7,\n  .col-lg-8,\n  .col-lg-9,\n  .col-lg-10,\n  .col-lg-11,\n  .col-lg-12 {\n    box-sizing: border-box;\n    display: inline-block;\n    zoom: 1;\n    letter-spacing: normal;\n    word-spacing: normal;\n    vertical-align: top;\n    text-rendering: auto;\n    padding: padding: ", "}px;px;\n  }\n  \n  .hidden-lg {\n    display: none;\n  }\n  .visible-lg {\n    display: block;\n  }\n"])), function (_ref) {
  var spacing = _ref.spacing;
  return isDefined(spacing) ? spacing : defaultSettings.spacing;
}, function (_ref2) {
  var spacing = _ref2.spacing;
  return isDefined(spacing) ? spacing * 2 : defaultSettings.spacing * 2;
}, function (_ref3) {
  var sm = _ref3.sm;
  return isDefined(sm) ? sm : defaultSettings.sm;
}, function (_ref4) {
  var spacing = _ref4.spacing;
  return isDefined(spacing) ? spacing * 2 : defaultSettings.spacing * 2;
}, function (_ref5) {
  var md = _ref5.md;
  return isDefined(md) ? md : defaultSettings.md;
}, function (_ref6) {
  var spacing = _ref6.spacing;
  return isDefined(spacing) ? spacing * 2 : defaultSettings.spacing * 2;
}, function (_ref7) {
  var lg = _ref7.lg;
  return isDefined(lg) ? lg : defaultSettings.lg;
}, function (_ref8) {
  var spacing = _ref8.spacing;
  return isDefined(spacing) ? spacing * 2 : defaultSettings.spacing * 2;
});

var _default = StyledResponsiveGrid;
exports["default"] = _default;