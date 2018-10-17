"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgFil = function SvgFil(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 32, height: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, r: 16, fill: "#42C1CA" }),
      _react2.default.createElement("path", {
        fill: "#FFF",
        d: "M15.932 12.908c.372-1.563.82-2.968 1.296-3.885.175-.438.885-1.487 1.664-2.18 1.297-1.155 2.752-1.448 4.267-.497l-.133.211.133-.211c.773.485 1.083.984.947 1.454-.1.35-.483.63-.688.601-.3.03-.602-.03-.89-.242a1.685 1.685 0 0 1-.541-.721c-.212-.5-.49-.67-.831-.63-.247.028-.534.186-.625.292l-.235.26a3.894 3.894 0 0 0-.484.635c-.476.793-.915 2.246-1.524 5.257l4.036.591-.222 1.617-4.096-.6-.175 1.064-.045.266c-.024.138-.05.288-.08.448l4.136.606-.237 1.615-4.233-.62c-.489 2.078-1.133 4.305-1.588 5.184-.176.439-.885 1.486-1.664 2.18-1.297 1.154-2.752 1.448-4.267.497-.773-.485-1.083-.985-.947-1.455.1-.35.483-.629.688-.6.3-.03.602.03.89.241.222.164.406.402.541.722.212.499.49.67.831.63.247-.029.534-.187.625-.293.907-1.01 1.626-2.956 2.535-7.45l-4.036-.592.222-1.617 4.096.6.176-1.063a31.19 31.19 0 0 1 .125-.715l-4.12-.603.236-1.615 4.217.618z"
      })
    )
  );
};

exports.default = SvgFil;