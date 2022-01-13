import React from 'react'
import { 
  Navbar,
  Main
} from '../components'

export const Home = () => {
  return(
    <div className="w-full max-w-screen-2xl 2xl:mx-auto">
      <Navbar />
      <div className="md:px-16 lg:px-24 px-5 mt-2">
        <Main />
      </div>
    </div>
  )
}