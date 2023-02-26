import React from "react";

const SearchBox = (props) => {
  return (
    <div className='col col-sm-4'>
      <input
        className='form-control shadow-none'
        value={props.value}
        onChange={(e) => {
          props.setSearchValue(e.target.value);
        }}
        placeholder='Search movies...'
      />
    </div>
  );
};

export default SearchBox;
