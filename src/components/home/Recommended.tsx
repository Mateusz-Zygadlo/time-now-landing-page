import React from 'react'
import { RECOMMENDED_CONTENT } from '../../content'

export const Recommended = () => {
  const { h1, users, p1, p2 } = RECOMMENDED_CONTENT
  
  return(
    <div className="py-10 flex flex-col lg:flex-row justify-between md:px-16 lg:px-24 px-5 mt-2">
      <div className="lg:mr-5 flex flex-col md:flex-row lg:flex-col my-5">
        <h1 className="text-4xl font-extrabold text-dark-violet">{h1}</h1>
        <div className="flex items-center flex-wrap px-2 mt-5 md:mt-0 lg:mt-5">
          {users.map((user, index: number) => (
            <img 
              key={index}
              src={user} 
              alt="user"
              className="w-10 mr-3"
            />
          ))}
        </div>
      </div>
      <div>
        <p className="text-lg text-gray-600">{p1}</p>
        <p className="text-lg mt-5 text-gray-600">{p2}</p>
      </div>
    </div>
  )
}