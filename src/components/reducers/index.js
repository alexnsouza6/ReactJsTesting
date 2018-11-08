import { combineReducers } from 'redux';
import commentsReducer from 'components/reducers/comments';

export default combineReducers({
  comments: commentsReducer
});