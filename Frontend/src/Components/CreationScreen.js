import React from 'react';
import CreationBoardTemplate from './CreationBoardTemplate';
import SearchBarFormContainer from './SearchBarFormContainer'

let CreationScreen = (props) =>
  <div className='home-page'>
    <h1 className='title'>Framed Intentions</h1>
    <SearchBarFormContainer {...props} />
    <div className='creation-main'>
      {/* <CreationSideBar images={images} /> */}
      <CreationBoardTemplate />
    </div>
  </div>

export default CreationScreen;