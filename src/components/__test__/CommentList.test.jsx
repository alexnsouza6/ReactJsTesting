import React from 'react';
import { mount } from 'enzyme';
import Root from '../../Root';
import CommentList from '../CommentList';

let component;

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2'],
  };

  component = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>,
  );
});

afterEach(() => {
  component.unmount();
});

it('creates a li for each comment', () => {
  expect(component.find('li').length).toEqual(2);
});

it('checks for text within each li tag', () => {
  expect(component.render().text()).toContain('Comment 1');
  expect(component.render().text()).toContain('Comment 2');
});
