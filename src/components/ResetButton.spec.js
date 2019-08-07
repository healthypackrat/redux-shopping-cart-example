import React from 'react'
import { shallow } from 'enzyme'
import ResetButton from './ResetButton'

const setup = () => {
  const actions = {
    onResetClicked: jest.fn()
  }

  const component = shallow(
    <ResetButton {...actions} />
  )

  return {
    component: component,
    actions: actions
  }
}

describe('ResetButton component', () => {
  it('should call action on button click', () => {
    const { component, actions } = setup()
    component.simulate('click')
    expect(actions.onResetClicked).toBeCalled()
  })
})
