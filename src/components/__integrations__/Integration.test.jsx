import React from 'react';
import moxios from 'moxios';
import { mount } from 'enzyme';
import App from '../App';
import Root from '../../Root';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('fetches a list of comments when button is clicked', (done) => {
  const component = mount(
    <Root>
      <App />
    </Root>,
  );

  component.find('.fetch-comments').simulate('click');
  moxios.wait(() => {
    component.update();
    expect(component.find('li').length).toEqual(2);
    done();
  });
});
