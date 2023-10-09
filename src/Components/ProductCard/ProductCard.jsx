import React from 'react'
import './ProductCard.css'
const ProductCard = ({data}) => {
  return (
    data.map(dat => {
        
        return (
          <div
          className='product-card-container'
            key={dat.id} 
          >
            <img  src={dat.productImg} alt="" />
            <div >
              <p>{dat.productName}</p>
              <p>{dat.productPrice}$</p>
              <button>Add to Cart</button>
            </div>
          </div>
        );
      })
  )
}

export default ProductCard
