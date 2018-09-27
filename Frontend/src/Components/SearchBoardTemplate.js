import React from 'react';
import SearchBoardSquare from './SearchBoardSquare';
import { Link } from 'react-router-dom';

let saveImages = (event) => {
  event.preventDefault();
  //this function will cause navigation to the create board to happen
}

const SearchBoardTemplate = (props) => {
  return (
    <form className='search-images-container' onSubmit={saveImages}>
      <div className='search-images-board'>
        {props.images.map(image => <SearchBoardSquare key={image.id} image={image}/>)}
      </div>
      <Link to="/create">
        <button type="submit" className="btn btn-danger">Save</button>
      </Link>
  </form>)
}

export default SearchBoardTemplate;