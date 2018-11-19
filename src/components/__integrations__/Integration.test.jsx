import React from 'react';
import moxios from 'moxios';
import { mount } from 'enzyme';
import { MemoryRouter, Link } from 'react-router-dom';
import Root from '../../Root';
import App from '../App';
import Header from '../Header';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let component;
const comments = [{ name: 'Fetched #1' }, { name: 'Fetched #2' }];

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: comments,
  });

  component = mount(
    <MemoryRouter initialEntries={['/post', '/']} initialIndex={0}>
      <Root>
        <App />
      </Root>
    </MemoryRouter>,
  );
});

afterEach(() => {
  moxios.uninstall();
});

it('fetches a list of comments when button is clicked', (done) => {
  component
    .find(CommentBox)
    .find('.fetch-comments')
    .simulate('click');
  moxios.wait(() => {
    component.update();
    expect(component.find(CommentList).find('li')).toHaveLength(2);
    done();
  });
});
