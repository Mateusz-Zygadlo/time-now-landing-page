import React from 'react'
import { Button } from '../Button'

interface ProductCardProps {
  name: string;
  h1: string;
  p: string;
  buttonText: string;
  isButton: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  h1,
  p,
  buttonText,
  isButton
}) => {
  return (
    <div className="sm:mx-10 my-5">
      <p className="font-semibold text-blue-violet">{name}</p>
      <h1 className="text-4xl font-extrabold text-dark-green">{h1}</h1>
      <p className="mt-2 text-gray-800">{p}</p>
      <div className="mt-5">
        {isButton ? <Button>{buttonText}</Button> : <p className="text-dark-violet font-bold cursor-pointer">{buttonText}</p>}
      </div>
    </div>
  )
}
