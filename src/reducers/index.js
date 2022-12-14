import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  // replaceMe: () => '2022 Hi'
  posts: postsReducer,
  users: usersReducer
});
