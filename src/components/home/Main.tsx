import React from 'react'
import { MAIN_CONTENT } from '../../content'
import { Button } from '../Button'
import { Images } from '../../assets'

export const Main = () => {
  const { h1, p, beside_button, assurance } = MAIN_CONTENT
  
  return(
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="w-full lg:max-w-[40rem] mt-5 mb-10 lg:mt-20 lg:pr-5">
        <h1 className="text-dark-violet text-6xl font-extrabold pr-3">{h1}</h1>
        <p className="text-gray-600 mt-2 pr-5">{p}</p>
        <div className="w-full flex items-center my-5">
          <Button>Start Scheduling</Button>
          <p className="ml-8 font-semibold">{beside_button}</p>
        </div>
        <div>
          {assurance.map((item, index: number) => (
            <div 
              className="flex items-center"
              key={index}
            >
              <img 
                src={item.image}
                alt="checkmark"
              />
              <p className="ml-3 text-gray-600">{item.p}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-cyan flex items-center justify-center p-5">
        <img 
          src={Images.Mockup}
          alt="mockup"
          className="w-full max-w-[50rem]"
        />
      </div>
    </div>
  )
}