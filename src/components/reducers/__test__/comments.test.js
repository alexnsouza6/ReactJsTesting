import commentsReducer from '../comments';
import { SAVE_COMMENT } from '../../actions/types';


it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'This is a new comment'
  }

  const newState = commentsReducer([],action);

  expect(newState).toEqual(['This is a new comment']);
});

it('returns empty array for unknown type', () => {
  const newState = commentsReducer([],'');
  expect(newState).toEqual([]);
});