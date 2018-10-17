import React from "react";

const SvgBnt = props => (
  <svg width={32} height={32} {...props}>
    <g fill="none">
      <circle cx={16} cy={16} r={16} fill="#000D2B" />
      <path
        fill="#FFF"
        d="M15.92 5.88l-4.518 2.647 4.518 2.648 4.603-2.648L15.92 5.88zm.743 14.134v5.295l6.137-3.501v-5.296l-6.137 3.502zm4.603-9.822v5.296l-4.604 2.648V12.84l4.604-2.648zm-11.082 5.296l4.604 2.648V12.84l-4.604-2.648v5.296zm0 7.174l4.604 2.647v-5.295l-4.604-2.647v5.294z"
      />
    </g>
  </svg>
);

export default SvgBnt;