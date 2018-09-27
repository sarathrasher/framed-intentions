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
          userBoard: oldState.userBoard.concat([action.image])
      }
  }
}
// let updateCart = (oldState, action) => {
//   let newCart = 
//     oldState.cartItems.concat([action.product])
//   console.log(newCart);
//   return {
//     ...oldState,
//     cartItems: newCart
//   }
// }

let updateLocation = (oldState, action) => {
  oldState
}

let updateSize = (oldState, action) => {
  
}

let reducers = {
  UPDATE_LOCATION: updateLocation,
  UPDATE_SIZE: updateSize,
  "TOGGLE_FROM_USER_BOARD": toggleFromUserBoard
}

let reducer = (oldState, action) => {
  let changeState = reducers[action.type];
  return changeState ? changeState(oldState, action) : oldState
}

export default reducer;