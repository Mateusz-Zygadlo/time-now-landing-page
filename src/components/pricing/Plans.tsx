import React from 'react'
import { PLANS_CONTENT } from '../../content'
import { PricingCard } from './PricingCard'

export const Plans = () => {
  const { h1, p, plans } = PLANS_CONTENT

  return (
    <div className="mt-10 w-full flex flex-col justify-center items-center md:px-16 lg:px-24 px-5">
      <h1 className="text-6xl font-extrabold text-center">{h1}</h1>
      <p className="text-gray-600 lg:w-1/2 text-center mt-2">{p}</p>
      <div className="flex items-center mt-5">
        <p className="font-bold">Billed Monthly</p>
        <label className="switch mx-5">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <p>Billed Yearly</p>
      </div>
      <div className="pricing-card-grid">
        {plans.map((plan, index: number) => (
          <PricingCard
            key={index} 
            {...plan}
          />
        ))}
      </div>
    </div>
  )
}
