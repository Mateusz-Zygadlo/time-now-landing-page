import React from 'react'
import { 
  Navbar,
  Main,
  Recommended,
  Products
} from '../components'

export const Home = () => {
  return(
    <div className="w-full max-w-screen-2xl 2xl:mx-auto">
      <Navbar />
      <div>
        <Main />
        <Recommended />
        <Products />
      </div>
    </div>
  )
}