import React from 'react';
import moxios from 'moxios';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import CommentBox from '../CommentBox';
import Root from '../../Root';
import CommentList from '../CommentList';

let component;

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }],
  });
  component = mount(
    <MemoryRouter initialEntries={['/post']}>
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
    expect(component.find(CommentList).find('li').length).toEqual(2);
    done();
  });
});
