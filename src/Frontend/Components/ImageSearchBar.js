import React from 'react';

const ImageSearchBar = (props) => {
  return (
    <form onSubmit={props.searchImages}>
      <input type="text" className="cyan-border" placeholder="Search" value={props.newInput} onChange={props.handleNewInput}/>
      <button type='submit'><i className="fa fa-search" aria-hidden="true"></i></button>
    </form>
    )
}

export default ImageSearchBar;