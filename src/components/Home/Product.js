import React from 'react'
import Img from 'gatsby-image'

export default function Product({product}) {
    console.log(product);
   const {title, price, image,id} = product
    return (
       <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
           <div className="card" style={{minHeight:'100%'}}>
        <Img fluid={image.fluid} className='card-img-top' />
        <h6>{title}</h6>
        <h6>{price}</h6>
        <button className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"  
        data-item-id={id}
            data-item-price={price}
            data-item-url="https://buycoffee.netlify.app"
            data-item-image={image.fluid.src}
            data-item-name={title} >
            add to cart
        </button>
           </div>
       </div>
    )
}
