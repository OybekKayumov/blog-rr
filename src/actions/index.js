import jsonPlhldr from "../api/jsonPlhldr";

//TODO: totally equivalent to origin
export const fetchPosts =  () => async dispatch => {
  const response = await jsonPlhldr.get('/posts');
    dispatch({ type : 'FETCH_POSTS', payload: response})
}


//? WE ARE DEFINING A FUNCTION (fetchPosts) 
//? THAT IS GOING TO RETURN A FUNCTION (dispatch)

// return {
//   type: 'FETCH_POSTS',
//   payload: response
// };

//* origin

// export const fetchPosts =  () => {
  
//   return async function (dispatch, getState) {

//     const response = await jsonPlhldr.get('/posts');
    
//     dispatch({ type : 'FETCH_POSTS', payload: response})
//   }
// };
