import SAVE_COMMENT from '../types';
import saveComment from '../index';

describe('saveComment', () => {
  it('has a valid type', () => {
    const { type } = saveComment();
    expect(type).toEqual(SAVE_COMMENT);
  });

  it('has a valid payload', () => {
    const { payload } = saveComment('This is a new comment');
    expect(payload).toEqual('This is a new comment');
  });
});
