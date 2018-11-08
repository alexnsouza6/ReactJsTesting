const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'Something':
    return { ...state, ...payload }

  default:
    return state;
  }
}
