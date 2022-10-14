import { combineReducers} from 'redux';
import postsReducer from './postsReducer';

export default combineReducers({
  // replaceMe: () => '2022 Hi'
  posts: postsReducer
});