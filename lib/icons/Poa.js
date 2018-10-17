"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgPoa = function SvgPoa(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#444fa1", r: 16 }),
      _react2.default.createElement("path", {
        d: "M5 24L16 5l11 19zm6.872-9.676c1.285-.858 2.663-1.291 4.128-1.291s2.843.433 4.128 1.291L16 7.194zm-1.951 3.37l-2.997 5.177h18.152l-2.997-5.176c-1.81 1.989-3.843 2.999-6.079 2.999s-4.27-1.01-6.08-3zM16 19.565c1.938 0 3.711-.89 5.338-2.7-1.627-1.813-3.4-2.702-5.338-2.702s-3.711.89-5.338 2.701c1.627 1.812 3.4 2.702 5.338 2.702zm0-.483c-1.16 0-2.101-.975-2.101-2.178 0-1.202.94-2.177 2.101-2.177s2.101.975 2.101 2.177c0 1.203-.94 2.178-2.101 2.178zm0-1.13c.559 0 1.012-.469 1.012-1.048 0-.579-.453-1.048-1.012-1.048s-1.012.47-1.012 1.048c0 .58.453 1.049 1.012 1.049z",
        fill: "#fff"
      })
    )
  );
};

exports.default = SvgPoa;