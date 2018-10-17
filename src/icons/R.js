import React from "react";

const SvgR = props => (
  <svg height={32} width={32} {...props}>
    <g fill="none">
      <circle cx={16} cy={16} fill="#771a4e" r={16} />
      <path
        d="M10.5 24.638l3.467-1.812V10.745l4.952 2.778-3.714 1.933v3.987L23.5 25v-3.745l-5.076-3.503 4.209-2.175v-3.866L13.967 7 10.5 8.812z"
        fill="#fff"
      />
    </g>
  </svg>
);

export default SvgR;
