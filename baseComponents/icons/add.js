import React from "react";

function AddIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      className={className}
      fill="currentColor"
    >
      <path
        d="M20,0A20,20,0,1,0,40,20,20.023,20.023,0,0,0,20,0ZM31.667,20.833a.833.833,0,0,1-.833.833H21.667v9.167a.833.833,0,0,1-.833.833H19.167a.833.833,0,0,1-.833-.833V21.667H9.167a.833.833,0,0,1-.833-.833V19.167a.833.833,0,0,1,.833-.833h9.167V9.167a.833.833,0,0,1,.833-.833h1.667a.833.833,0,0,1,.833.833v9.167h9.167a.833.833,0,0,1,.833.833Z"
      />
    </svg>
  );
}

export default AddIcon;
