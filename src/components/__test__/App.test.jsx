import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import Root from '../../Root';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let component;

beforeEach(() => {});

it('shows a comment box', () => {
  component = mount(
    <MemoryRouter initialEntries={['/post']}>
      <Root>
        <App />
      </Root>
    </MemoryRouter>,
  );
  expect(component.find(CommentBox)).toHaveLength(1);
});

it('shows a comment list', () => {
  component = mount(
    <MemoryRouter initialEntries={['/']}>
      <Root>
        <App />
      </Root>
    </MemoryRouter>,
  );
  expect(component.find(CommentList)).toHaveLength(1);
});
