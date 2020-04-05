var initial_state = {
  all_images:[], 
  single_image:[]
};

export default (state = initial_state, action) => {

  var new_state;

  switch(action.type){

    case 'FETCH_ALL_IMAGES':
      new_state = state;
      new_state.all_images = action.payload;
      return new_state;

    case 'FETCH_IMAGE_DETAILS':
      new_state = state;
      new_state.single_image = action.payload;
      return new_state;

    default:
      return state;
  }
}
