import React from 'react';


let ImageSearchBar = () => {
  return (
    <div className="input-group md-form form-sm form-2 pl-0">
      <input className="form-control my-0 py-1 cyan-border" type="submit" placeholder="Search" aria-label="Search"></input>
      <div className="input-group-append">
        <span className="input-group-text cyan lighten-2" id="basic-text1"><i className="fa fa-search text-grey" aria-hidden="true"></i></span>
      </div>
    </div>
    )
}

export default ImageSearchBar;