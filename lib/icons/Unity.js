"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgUnity = function SvgUnity(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#f58634", r: 16 }),
      _react2.default.createElement(
        "g",
        { fill: "#fff", fillRule: "nonzero" },
        _react2.default.createElement("path", { d: "M13.288 22.732h.004c1.189-.144 2.189-.504 3-1.08 1.074-.77 1.611-1.748 1.611-2.934 0-1-.393-1.837-1.178-2.522-.787-.683-1.853-1.098-3.198-1.242-.457-.059-1.105-.102-1.937-.15-1.814-.11-2.991-.358-3.537-.747a1.742 1.742 0 0 1-.48-.522 1.236 1.236 0 0 1-.156-.61c0-.561.324-1.035.977-1.408.652-.372 1.476-.562 2.478-.562.949 0 1.89.162 2.78.48 3.826 1.364 7.48 6.132 9.913 9.546-1.983 1.205-4.684 1.948-7.66 1.948-.876 0-1.751-.065-2.617-.197zM9.009 20.79c-3.493-1.275-5.022-4.426-3.297-7.486.048.43.207.843.463 1.2.32.449.79.814 1.407 1.101 2.155.936 6.118.338 7.75 1.527.549.4.824.911.824 1.534 0 .783-.383 1.424-1.149 1.922-.765.498-1.761.747-2.987.747a8.86 8.86 0 0 1-3.01-.545z" }),
        _react2.default.createElement("path", {
          d: "M25.912 18.875v-5.854c.657.889 1.024 1.882 1.024 2.927 0 1.046-.367 2.037-1.024 2.927zm-1.649-7.46l.005 7.461c-2.343-3.326-5.844-7.511-10.147-8.909a10.616 10.616 0 0 0-2.293-.477A16.87 16.87 0 0 1 15.905 9c3.34 0 6.335.936 8.358 2.415z",
          opacity: 0.5
        })
      )
    )
  );
};

exports.default = SvgUnity;