import React from "react";
function Link({ label }) {
  return (
    <p
      className="relative overflow-hidden text-sm font-medium link-element hoverable"
    >
      <span className="real-text block">({label})</span>
      <span className="absolute left-0 bottom-5 fake-text block">
        ({label})
      </span>
    </p>
  );
}

export default Link;
