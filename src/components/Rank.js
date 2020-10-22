import React from "react";

const Rank = ({ onClick }) => (
  <button
    onClick={() => onClick()}
    className="btn btn-primary rank"
    name="rank"
  >
    Rank
  </button>
);

export default Rank;
