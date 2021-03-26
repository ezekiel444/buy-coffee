import React from 'react'
import Product from './Product'
import {graphql, useStaticQuery} from 'gatsby'
import Title from '../Globals/Title'

export default function Products() {

    const data = useStaticQuery(graphql`
{
 products:allContentfulContentProduct {
    nodes {
      id
      title
      price
      image {
        fluid(maxHeight: 420) {
          src
          ...GatsbyContentfulFluid
        }
      }
    }
  }
}
`)

    return (
       <section className="py-5">
           <div className="container">
               <Title className='Our products' />
               <div className="row">
                   {data.products.nodes.map(product=>{
                       return <Product key={product.id} product={product} />
                   })}
               </div>
           </div>
       </section>
    )
}


