import React from 'react'
import Button from './button'
import { shallow } from 'enzyme'

describe('button', () => {
  test('snapshot', () => {
    const button = shallow(<Button>My button</Button>)
    expect(button).toMatchSnapshot()
  })
})
