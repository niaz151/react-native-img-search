export const changeOrientation = (orientation) => {
  return({
    type:'CHANGE_ORIENTATION',
    payload: orientation
  })
}

export const updateSearchQuery = (query) => {
  return({
    type:'UPDATE_SEARCH_QUERY',
    payload: query
  })
}