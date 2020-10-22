import React from "react";

const Points = ({ onClick }) => (
  <button
    onClick={() => onClick()}
    className="btn btn-primary points"
    name="points"
  >
    Points
  </button>
);

export default Points;
