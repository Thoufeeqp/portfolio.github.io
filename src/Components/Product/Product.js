import React from 'react'
import "./Product.css"

function Product({name,image,desc}) {
  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
             </div>
             <a href='' target="_blank"></a>
             
            
              <h2 >{name}</h2>
              <img className='p-img' src={image} alt="" />
              <p>{desc}</p>
    </div>
  )
}

export default Product
