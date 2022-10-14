import jsonPlhldr from "../api/jsonPlhldr";

export const fetchPosts = async () => {
  // BAD approach!!!
  const response = await jsonPlhldr.get('/posts');

  return {
    type: 'FETCH_POSTS',
    payload: response
  };
};