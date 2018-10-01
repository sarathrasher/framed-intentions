import React from 'react';
import CreationBoardTemplate from './CreationBoardTemplate';
import SearchBarFormContainer from './SearchBarFormContainer'
import SmartBoardSaveButton from './BoardSaveButton';
import SmartNavBar from './Navigation';

let CreationScreen = (props) =>
  <div>
    <SmartNavBar />
    <div className='home-page'>
      <h1 className='title'>Framed Intentions</h1>
      <SearchBarFormContainer {...props} />
      <div className='creation-main'>
        {/* <CreationSideBar images={images} /> */}
        <CreationBoardTemplate />
        <SmartBoardSaveButton />
      </div>
    </div>
  </div>

export default CreationScreen;