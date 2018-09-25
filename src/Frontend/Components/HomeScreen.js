import React from 'react';
import BoardTemplate from './BoardTemplate';
import SearchBarFormContainer from './SearchBarFormContainer';

let HomeScreen = () =>
  <div className='home-page'>
    <h1 className='title'>Framed Intentions</h1>
    <SearchBarFormContainer />
    <BoardTemplate />
  </div>

export default HomeScreen;