import React from 'react';
import BoardTemplate from './BoardTemplate';
import ImageSearchForm from './ImageSearchForm'

let HomeScreen = () =>
  <div className='home-page'>
    <h1 className='title'>Framed Intentions</h1>
    <ImageSearchForm />
    <BoardTemplate />
  </div>

export default HomeScreen;