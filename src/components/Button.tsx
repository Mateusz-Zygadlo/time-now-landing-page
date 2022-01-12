import React from 'react'

export const Button: React.FC = ({ children }) => {
  return(
    <button className="px-5 py-3 font-semibold flex justify-center items-center bg-dark-violet rounded-lg border-dark-violet border-2 text-white hover:text-dark-violet hover:bg-white transition-colors duration-500">
      {children}
    </button>
  )
}