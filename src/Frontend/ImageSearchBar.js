import React from 'react';

const ImageSearchBar = (props) => {
  return (
    <form className="input-group md-form form-sm form-2 pl-0" onSubmit={props.searchImages}>
      <input type="text" placeholder="Search" value={props.newInput} onChange={props.handleNewInput} required={true}/>
      <button type='submit' value="Search"><i></i></button>
    </form>
    )
}

export default ImageSearchBar;