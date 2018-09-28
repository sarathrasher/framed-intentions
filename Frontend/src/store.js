import { createStore } from 'redux';
import reducer from './Reducer/reducer'

let initialState = {
  userToken: '',
  userBoard: [],
  userId: '',
  email: ''
}

let store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
