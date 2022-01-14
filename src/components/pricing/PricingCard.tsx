import React from 'react'
import { Button } from '../Button'
 
interface PricingCardProps {
  time: string;
  price: number | string;
  p: string;
  functions: Item[];
  buttonText: string;
}

interface Item {
  image: string;
  p: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  price, 
  time,
  p,
  functions,
  buttonText,
}) => {
  return (
    <div className="border-2 p-4 mx-5 my-5">
      <div className="flex items-end">
        <h1 className="text-4xl font-extrabold">{price}</h1>
        <p className="text-gray-400">/{time}</p>
      </div>
      <p className="my-3 pb-3 border-b-2">{p}</p>
      <div className="mt-2 mb-5">
        {functions.map((item: Item, index: number) => (
          <div 
            key={index} 
            className="flex items-center my-2"
          >
            <img 
              src={item.image}
              alt="checkbox"
            />
            <p className="ml-4">{item.p}</p>
          </div>
        ))}
      </div>
      <Button wFull>{buttonText}</Button>
    </div>
  )
}
