import React from 'react';
import BoardTemplate from './BoardTemplate';
import SearchBarFormContainer from './SearchBarFormContainer';

let HomeScreen = () =>
  <div class='home-page'>
    <h1 className='title'>Framed Intentions</h1>
    <SearchBarFormContainer />
    <BoardTemplate />
  </div>

export default HomeScreen;