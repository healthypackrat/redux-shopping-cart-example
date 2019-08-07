import React from 'react'
import PropTypes from 'prop-types'

const ResetButton = ({ onResetClicked }) => (
  <button onClick={onResetClicked}>Reset</button>
)

ResetButton.propTypes = {
  onResetClicked: PropTypes.func.isRequired
}

export default ResetButton
