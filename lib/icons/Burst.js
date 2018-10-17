"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgBurst = function SvgBurst(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ height: 32, width: 32 }, props),
    _react2.default.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      _react2.default.createElement("circle", { cx: 16, cy: 16, fill: "#2d2d2d", r: 16 }),
      _react2.default.createElement("path", {
        d: "M11.706 19.296L4 16.77h5.155l.51-2.443 4.578.003L15.385 8h4.606c3.118 0 4.382 1.255 3.915 3.845l-.1.555c-.273 1.509-.962 2.512-2.146 3.091 1.173.6 1.567 1.735 1.272 3.37l-.228 1.266C22.248 22.653 20.39 24 17.372 24h-4.875l1.263-6.993h-1.53zm5.066-2.747l-.944 5.23h1.945c1.154 0 1.795-.512 2.013-1.72l.245-1.353c.278-1.543-.256-2.157-1.769-2.157zm1.143-6.329l-.824 4.564h1.412c1.288 0 2.041-.55 2.272-1.83l.157-.866c.225-1.247-.241-1.868-1.422-1.868H18.1z",
        fill: "#fff",
        fillRule: "nonzero"
      })
    )
  );
};

exports.default = SvgBurst;