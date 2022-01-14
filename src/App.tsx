import React from 'react'
import { 
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom'
import { 
  Pricing,
  Home
} from './pages'
import {
 Navbar,
 Footer,
} from './components'

const BasicTemplate = () => { 
  return(
    <div className="w-full max-w-screen-2xl 2xl:mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<BasicTemplate />}>
          <Route path='/' element={<Home />} />
          <Route path='/pricing' element={<Pricing />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}