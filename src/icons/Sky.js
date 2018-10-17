import React from "react";

const SvgSky = props => (
  <svg width={32} height={32} {...props}>
    <g fill="none">
      <circle cx={16} cy={16} r={16} fill="#0072FF" />
      <path
        fill="#FFF"
        d="M24.027 12.803L19.215 23.5h-1.923l5.065-11.26a5.384 5.384 0 0 1 1.67.563zm-8.42-6.284L8.204 22.978C6.316 22.082 5 20.119 5 17.833c0-3.13 2.462-5.666 5.5-5.666 0-2.995 2.254-5.44 5.107-5.648zm5.894 5.648L16.402 23.5h-2.083l6.402-14.23c.493.848.78 1.836.78 2.897zm1.894 10.982l3.266-7.256c.216.608.339 1.26.339 1.943 0 2.438-1.5 4.515-3.605 5.313zm1.442-9.814c.456.36.86.788 1.186 1.279l-3.986 8.858a5.025 5.025 0 0 1-.536.028h-1.236l4.572-10.165zM16.02 6.5c.78.003 1.519.174 2.19.481L10.78 23.5h-.28c-.69 0-1.35-.136-1.957-.377L16.02 6.5zm4.267 2.118L13.592 23.5h-2.246l7.327-16.285c.622.358 1.17.836 1.614 1.403z"
      />
    </g>
  </svg>
);

export default SvgSky;
