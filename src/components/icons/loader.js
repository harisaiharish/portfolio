import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <g id="N" transform="translate(35, 20)">
        <path
          d="M 0,0 V 60 M 0,0 L 30,60 M 30,0 V 60"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
        />
      </g>
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
          L 11, 27
          L 11, 72
          L 50, 95
          L 89, 73
          L 89, 28 z"
      />
    </g>
  </svg>
);

export default IconLoader;
