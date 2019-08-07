import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout, getAllProducts } from '../actions'
import ResetButton from '../components/ResetButton'

const ResetContainer = ({ checkout, getAllProducts }) => (
  <ResetButton onResetClicked={() => { checkout(); getAllProducts() }} />
)

ResetContainer.propTypes = {
  checkout: PropTypes.func.isRequired,
  getAllProducts: PropTypes.func.isRequired
}

export default connect(
  null,
  { checkout, getAllProducts }
)(ResetContainer)
