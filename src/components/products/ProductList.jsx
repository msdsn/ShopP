import React from 'react'
import "./Product.scss"
import ProductCard from './ProductCard'

const ProductList = ({products}) => {
  console.log(products)
  return (
    <div className='product-list'>
    {
      products.map((product, index) => <ProductCard key={index} {...product} />)
    }
    </div>
  )
}

export default ProductList