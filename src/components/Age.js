import React from "react";

const Age = ({ onClick }) => (
  <button onClick={() => onClick()} className="btn btn-primary age" name="age">
    Age
  </button>
);

export default Age;
