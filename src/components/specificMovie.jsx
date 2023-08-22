import React, { Component } from "react";

const SpecificMovie = ({ match, history }) => {
  return (
    <div>
      <h1>Movie form -{match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default SpecificMovie;
