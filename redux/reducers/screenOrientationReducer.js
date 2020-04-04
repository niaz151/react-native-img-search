var initial_state = "portrait";

export default (state = initial_state, action) => {
  switch(action.type){

    case 'ORIENTATION_CHANGE':
      let new_state = initial_state
      action.payload === 'portrait' ?
         new_state = 'landscape': 
         new_state = 'portrait';
      return new_state

    default:
      return state;
  }
}

