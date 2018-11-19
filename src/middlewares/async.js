export default ({ dispatch }) => next => action => {
  const { payload } = action;
  if (!payload || !payload.then) {
    return next(action);
  }
  payload.then(response => {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
