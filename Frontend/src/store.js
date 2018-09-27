import { createStore } from 'redux';
import reducer from './Reducer/reducer'

let board = [ 
  { 
    id: 'WphP036Zuvg',
    description: 'person sitting on rock beside of brindle through sea waves crashing on rock',
    smallURL: 'https://images.unsplash.com/photo-1498892156743-6d5da30bab8b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjM3MjcyfQ&s=2bbe55bb72c8940c1524d86c06739709',
    location: [],
    size: [],
  },  
  { 
    id: 'JCXANpeR2XI',
    description: 'white and gray dog',
    smallURL: 'https://images.unsplash.com/photo-1437957146754-f6377debe171?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjM3MjcyfQ&s=b3fc5e30ae51561a2bab371ab87ff4d0',
    location: [],
    size: [],
  },
  { 
    id: 'SxaomCYjYFw',
    description: 'short-coated brown dog on snowfield during daytime',
    smallURL: 'https://images.unsplash.com/photo-1519885443653-3d2a8430af45?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjM3MjcyfQ&s=ee234bf928c94dd8e315542687d0bf0f',
    location: [],
    size: []
  },
  { 
    id: 'iJMuiysde1M',
    description: 'adult white and gray shih tzu',
    smallURL: 'https://images.unsplash.com/photo-1529954382468-c3b5e8371e10?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjM3MjcyfQ&s=ef8a64a45329c10fdfe06b3b7e2fac02',
    location: [],
    size: [],
  },
  { 
    id: 'vB4sbmlHa7E',
    description: 'person doing back-flip in the desert dune',
    smallURL: 'https://images.unsplash.com/photo-1516861977425-092ed4141b92?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjM3MjcyfQ&s=c4094c3bdf207ecc20f0ca79dac08203',
    location: [],
    size: [], 
  },
  { 
    id: 'yj5vVBO7NZ8',
    description: 'photo of man on snow-covered land',
    smallURL: 'https://images.unsplash.com/photo-1531684096782-1af8c28ddb95?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjM3MjcyfQ&s=46e5b46be4037ad62bbf7147c032ecd7',
    location: [],
    size: [],
  },
  { 
    id: 'NLYlix4HQAI',
    description: 'grayscale photo of opened mouth of dog',
    smallURL: 'https://images.unsplash.com/photo-1529259646408-5c50deb4cf6a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjM3MjcyfQ&s=1c7de18a7225d9cc53e8e416b4c2cf75',
    location: [],
    size: [], 
  },
  { 
    id: 'n8JbWAB9Ypw',
    description: 'adult brown Labrador retriever',
    smallURL: 'https://images.unsplash.com/photo-1524800930948-7923979f04e6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjM3MjcyfQ&s=fa54bec898816791b880054705c665d3', 
    location: [],
    size: [],
  },
  { 
    id: 'F2ej9ZUdF1c',
    description: null,
    smallURL: 'https://images.unsplash.com/photo-1537175918375-102d018ce3a8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjM3MjcyfQ&s=661d109752ff9fd0883ec05ca1acbf46',
    location: [],
    size: [], 
} ]


let initialState = {
  userToken: '',
  userBoard: []
}

let store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
