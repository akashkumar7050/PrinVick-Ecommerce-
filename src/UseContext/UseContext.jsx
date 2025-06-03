import React, { useContext } from 'react'
import { Context } from './Context'

const UseContext = () => {
  const cart = useContext(Context)
  return cart
}

export default UseContext