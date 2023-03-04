import React from "react";

const MovieListHeading = (props) => {
  return (
    <div className='row d-flex align-items-center'>

    <div className='col'>
      <h1>{props.heading}</h1>
    </div>
    </div>
  );
};

export default MovieListHeading;
