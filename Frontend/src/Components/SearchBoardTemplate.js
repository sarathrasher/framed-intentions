import React from 'react';
import SearchBoardSquare from './SearchBoardSquare';

// let saveImages = (event) => {
//   event.preventDefault();
//   //this function will cause navigation to the create board to happen
// }

const SearchBoardTemplate = (props) => {
  return (
    <form className='search-images-container'>
      <div className='search-images-board'>
        {props.images.map(image => <SearchBoardSquare key={image.id} image={image}/>)}
      </div>
      <button type="submit" className="btn btn-danger">Save</button>
  </form>)
}

export default SearchBoardTemplate;