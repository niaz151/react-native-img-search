var initial_state = {
  all_images:[], 
  single_image:[]
};

export default (state = initial_state, action) => {
  switch(action.type){

    case 'UPDATE_ALL_IMAGES':
      let new_state = initial_state;
      new_state.all_images = action.payload;
      return new_state;

    default:
      return state;
  }
}
