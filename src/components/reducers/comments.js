import { SAVE_COMMENT, FETCH_COMMENT } from '../actions/types';

const initialState = [];
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_COMMENT:
      return [...state, payload];
    case FETCH_COMMENT:
      const newPayload = payload.data.map(comment => comment.name);
      return [...state, ...newPayload];
    default:
      return state;
  }
};
