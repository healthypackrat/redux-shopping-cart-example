import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import ResetContainer from './ResetContainer'

const App = () => (
  <div>
    <h2>Shopping Cart Example</h2>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
    <hr/>
    <ResetContainer />
  </div>
)

export default App
