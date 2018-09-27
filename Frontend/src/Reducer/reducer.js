const toggleFromSavedImages = (oldState, action) => {
  let savedImageIds = oldState.savedImages.map(image => image.id)
  if (savedImageIds.includes(action.image.id)) {
    return ({
      ...oldState, 
      savedImages: oldState.savedImages.filter(image => image.id !== action.image.id)
    })
  } else {
      return {
          ...oldState, 
          savedImages: oldState.savedImages.concat([action.image])
      }
  }
}

let reducers = {
  "TOGGLE_FROM_SAVED_IMAGES": toggleFromSavedImages
}

let reducer = (oldState, action) => {
  let changeState = reducers[action.type];
  return changeState ? changeState(oldState, action) : oldState
}

export default reducer;