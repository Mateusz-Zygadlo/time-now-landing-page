import React from 'react'
import { 
  Navbar
} from './components'

export const App = () => {
  return(
    <div className="w-full max-w-screen-2xl 2xl:mx-auto md:px-16 lg:px-24 px-5 py-10">
      <Navbar />
    </div>
  )
}