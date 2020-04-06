var initial_state = "";

export default (state = initial_state, action) => {
  switch(action.type){

    case 'UPDATE_SEARCH_QUERY':
      let new_state = initial_state;
      new_state = action.payload;
      return new_state;

    default:
      return state;
  }
}



