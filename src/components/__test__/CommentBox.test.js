import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let component;

beforeEach(() => {
  component = mount(<CommentBox/>);
});

afterEach(() => {
  component.unmount();
});

it('has a text area and a button', () => {
  expect(component.find('textarea').length).toEqual(1);
  expect(component.find('button').length).toEqual(1);
});


describe('When testing text area', () => {
  beforeEach(() => {
    component.find('textarea').simulate('change', {
      target: { value: 'This is a new comment' }
    });
    
    component.update();
  });

  it('has a text area that user can type in', () => {
    expect(component.find('textarea').prop('value')).toEqual('This is a new comment');
  });

  it('makes text area empty when the form is submitted', () => {
    component.find('form').simulate('submit');
    
    component.update();

    expect(component.find('textarea').prop('value')).toEqual('');
  });
});