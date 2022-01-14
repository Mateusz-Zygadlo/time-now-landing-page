import React from 'react'
import { 
  Main,
  Recommended,
  Products,
} from '../components'
import { useScrollToTop } from '../hooks'

export const Home = () => {
  useScrollToTop()
  
  return(
    <>
      <Main />
      <Recommended />
      <Products />
    </>
  )
}