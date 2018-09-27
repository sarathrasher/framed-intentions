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
  let image = oldState.userBoard.find(image => image.action.id === oldState.userBoard.id)
}

let updateSize = (oldState, action) => {
  let image = oldState.userBoard.find(image => image.action.id === oldState.userBoard.id)
  image.location = [action.x, action.y]
}

let reducers = {
  UPDATE_LOCATION: updateLocation,
  UPDATE_SIZE: updateSize,
}

let reducer = (oldState, action) => {
  let changeState = reducers[action.type];
  return changeState ? changeState(oldState, action) : oldState
}

export default reducer;