import React from "react";

const Name = ({ onClick }) => (
  <button
    onClick={() => onClick()}
    className="btn btn-primary name"
    name="name"
  >
    Name
  </button>
);

export default Name;
