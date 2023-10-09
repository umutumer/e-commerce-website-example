import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductContent.css'

const ProductContent = ({data}) => {
  return (
    <div className='product-content-container'>
        <h2>Product</h2>
      <div className="product-content">
      <ProductCard data={data} />
      </div>
    </div>
  )
}

export default ProductContent
