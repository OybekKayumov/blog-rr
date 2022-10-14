import jsonPlhldr from "../api/jsonPlhldr";

export const fetchPosts =  () => {
  
  return async function (dispatch, getState) {

    const response = await jsonPlhldr.get('/posts');
    
    dispatch({ type : 'FETCH_POSTS', payload: response})
  }
};


// return {
//   type: 'FETCH_POSTS',
//   payload: response
// };