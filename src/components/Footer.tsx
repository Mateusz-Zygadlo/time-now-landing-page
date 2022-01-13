import React from 'react'
import { Images } from '../assets'
import { Button } from './Button'

export const Footer = () => {
  return (
    <div className="md:px-16 lg:px-24 px-5 py-10 flex flex-col lg:flex-row lg:justify-between lg:items-center">
      <div>
        <img 
          src={Images.Logo}
          alt="logo"
        />
        <div className="flex mt-3 text-gray-600 flex-wrap">
          <ul className="pr-16 sm:pr-24 lg:pr-14 mb-5 lg:mb-0">
            <li className="font-bold mb-1 text-black">Product</li>
            <li>homePage</li>
            <li>Pricing</li>
            <li>Features</li>
          </ul>
          <ul className="pr-16 sm:pr-24 lg:pr-14 mb-5 lg:mb-0">
            <li className="font-bold mb-1 text-black">Help</li>
            <li>Live Chat</li>
            <li>Send Email</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li className="font-bold mb-1 text-black">Company</li>
            <li>About</li>
            <li>Customers</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 lg:mt-0">
        <p className="mb-1 font-bold">Try TweetNow</p>
        <form className="flex items-center">
          <input 
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full max-w-[15rem] border-2 py-2 px-4 md:mr-3"
          />
          <Button>Start Scheduling</Button>
        </form>
      </div>
    </div>
  )
}
