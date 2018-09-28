const savedBoard = (oldState, action) => { 
  return {
    ...oldState,
    saved: true,
  }
}

const toggleFromUserBoard = (oldState, action) => {
  let savedImageIds = oldState.userBoard.map(image => image.id)
  if (savedImageIds.includes(action.image.id)) {
    return ({
      ...oldState, 
      userBoard: oldState.userBoard.filter(image => image.id !== action.image.id)
    })
  } else {
      return {
          ...oldState, 
          userBoard: oldState.userBoard.concat([{...action.image, size: [150, 150], type: 'image'}])
      }
  }
}

let updateLocation = (oldState, action) => {
  let image = oldState.userBoard.find(image => image.id === action.id)
  image.location = [action.x, action.y]
  let newBoard = oldState.userBoard.filter(image => image.id !== action.id)
  return ({
    ...oldState,
    userBoard: newBoard.concat([image]),
    saved: false
  }
  )
}

let updateSize = (oldState, action) => {
  let image = oldState.userBoard.find(image => image.id === action.id)
  image.size = [action.width, action.height]
  let newBoard = oldState.userBoard.filter(image => image.id !== action.id)
  return ({
    ...oldState,
    userBoard: newBoard.concat([image]),
    saved: false
  }
  )
}

let storeUserInfo = (oldState, action) => { 
  return {
    ...oldState, 
    email: action.data.email,
    id: action.data.id
  }
}

let reducers = {
  UPDATE_LOCATION: updateLocation,
  UPDATE_SIZE: updateSize,
  "TOGGLE_FROM_USER_BOARD": toggleFromUserBoard,
  "STORE_USER_INFO": storeUserInfo,
  'SAVED_BOARD': savedBoard
}

let reducer = (oldState, action) => {
  let changeState = reducers[action.type];
  return changeState ? changeState(oldState, action) : oldState
}

export default reducer;