import React from 'react';
import DisplayUsers from './DisplayUsers';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
    const component = renderer.create(
      <DisplayUsers users = {} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });