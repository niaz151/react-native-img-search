var initial_state = "portrait";

export default (state = initial_state, action) => {
  switch(action.type){

    case 'UPDATE_SCREEN_ORIENTATION':
      var new_state = action.payload;
      return new_state

    default:
      return state;
  }
}

