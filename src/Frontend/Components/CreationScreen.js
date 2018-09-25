import React from 'react';
import BoardTemplate from './BoardTemplate';
import ImageSearchForm from './ImageSearchForm'
import CreationSideBar from './CreationSideBar';
let images = [ { id: 'MoDcnVRN5JU',
   rawURL: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjM3MjcyfQ&s=7f63dfd8ae23093b78a734a7a28df51d' },
 { id: 'gsLG-IFaxgs',
   rawURL: 'https://images.unsplash.com/photo-1530579807716-d82c0991629a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjM3MjcyfQ&s=d7cfe14957e4e9bc0265ab76732c0e51' },
 { id: 'U6nlG0Y5sfs',
   rawURL: 'https://images.unsplash.com/photo-1529472119196-cb724127a98e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjM3MjcyfQ&s=b8f61882f4b9ff097e886e977f39daee' },
 { id: 'OME1rVKfXyg',
   rawURL: 'https://images.unsplash.com/photo-1528113493861-907ef81b455f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjM3MjcyfQ&s=d98e17ad9d7151476849563871c0bd82' },
 { id: 'EbLqWZXaDwg',
   rawURL: 'https://images.unsplash.com/photo-1527424726923-52e678bdbc3e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjM3MjcyfQ&s=bfcec78314bcfd0d41be2cefdfdef56e' },
 { id: 'dpb-qhtcA0A',
   rawURL: 'https://images.unsplash.com/photo-1526489550178-7bd5d9944f4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjM3MjcyfQ&s=a6b0992e5f418bab5bec7ec15d89ecb7' },
 { id: '6vVoVMZrX1o',
   rawURL: 'https://images.unsplash.com/photo-1524620005514-155767e6a8a0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjM3MjcyfQ&s=b73094077a225db0c2ded382502aa743' },
 { id: 'Yn8wfomYYJc',
   rawURL: 'https://images.unsplash.com/photo-1524173988983-845c4353965b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjM3MjcyfQ&s=17dc1d57c36267ef529bfe53585e5e34' },
 { id: 'zqhe4qjVTJI',
   rawURL: 'https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjM3MjcyfQ&s=154d655e216609d4783b60186bc3ed74' } ]

let CreationScreen = () =>
  <div className='home-page'>
    <h1 className='title'>Framed Intentions</h1>
    <ImageSearchForm />
    <div className='creation-main'>
      <CreationSideBar images={images} />
      <BoardTemplate />
    </div>

  </div>
   
export default CreationScreen;