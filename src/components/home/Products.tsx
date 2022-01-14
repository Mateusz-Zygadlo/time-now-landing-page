import React from 'react'
import { ProductCard } from './ProductCard'
import { PRODUCTS_CONTENT } from '../../content'

export const Products = () => {
  return (
    <div className="bg-light-blue md:px-16 lg:px-24 px-5 mt-2 py-5 products-grid">
      {PRODUCTS_CONTENT.map((product, index: number) => (
        <ProductCard 
          key={index}
          {...product}
        />
      ))}
    </div>
  )
}
