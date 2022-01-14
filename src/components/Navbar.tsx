import React, { 
  useState,
  useEffect,
} from 'react'
import { Images } from '../assets'
import { Button } from './Button'
import {
  useMeasure,
  useWindowSize,
} from '../hooks'
import { MOBILE_WIDTH } from '../constants'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { width, setWidth } = useWindowSize()
  const [rect, myRef]: any = useMeasure()

  useEffect(() => {
    if(rect) setWidth(rect.width)
  }, [rect])
  
  return(
    <div
      className="sticky -top-1 md:px-16 lg:px-24 px-5 py-4 bg-white"
      ref={myRef}
    >
      <div className="flex justify-between lg:justify-start relative items-center">
        <Link to='/'>
          <img 
            src={Images.Logo}
            alt="logo"
            className="cursor-pointer"
          />
        </Link>
        {width > MOBILE_WIDTH ? (
          <div className="flex justify-between w-full">
            <ul className="flex items-center ml-5">
              <li className="text-xl mx-3 cursor-pointer border-b hover:border-black transition-colors duration-300">Features</li>
              <Link to='/pricing'>
                <li className="text-xl mx-3 cursor-pointer border-b hover:border-black transition-colors duration-300">Pricing</li>
              </Link>
            </ul>
            <Button>Start Scheduling</Button>
          </div>
        ) : isOpen ? (
          <div className="flex flex-col items-center absolute top-0 -right-1 w-full py-10 px-10 bg-white border-2 border-black">
            <img 
              src={Images.Close}
              alt="close"
              className="scale-150 absolute top-2 right-2"
              onClick={() => setIsOpen(false)}
            />
            <div className="flex flex-col items-center w-full">
              <ul className="flex flex-col items-center mb-5 pb-5 border-b">
                <li className="text-4xl sm:text-5xl my-3 cursor-pointer" onClick={() => setIsOpen(false)}>Features</li>
                <Link to='/pricing'>
                  <li className="text-4xl sm:text-5xl my-3 cursor-pointer" onClick={() => setIsOpen(false)}>Pricing</li>
                </Link>
              </ul>
              <Button>Start Scheduling</Button>
            </div>
          </div>
        ) : (
          <img 
            src={Images.HamburgerMenu}
            alt="hamburger menu icon"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>
    </div>
  )
}