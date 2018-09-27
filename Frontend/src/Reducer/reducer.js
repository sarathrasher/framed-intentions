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
}

let reducer = (oldState, action) => {
  let changeState = reducers[action.type];
  return changeState ? changeState(oldState, action) : oldState
}

export default reducer;