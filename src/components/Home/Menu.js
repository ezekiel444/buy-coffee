import React, { useState } from 'react'
import Title from '../Globals/Title'
import Img from 'gatsby-image'


function filterCategory(items){
    const allCategories = items.map(item=>item.category)
    let uniCategory = new Set(allCategories)
    return ['all', ...uniCategory]
}

export default function Menu({data}) {
   const [coffeeItem, setCoffeeItem] = useState({
    allData:data,
    temporayData:data,
    categoriesData:filterCategory(data)
})


const handleFilter = (category)=>{
    // let newCoffeeData = [...coffeeItem.temporayData]
  if( category === 'all' ){
 setCoffeeItem(prevItem=>{
  return {...prevItem, allData:data}
})
}else{
 let items = coffeeItem.temporayData.filter(item=>item.category === category)

 setCoffeeItem(prevItem=>{
     return {...prevItem, allData:items}
 })
}  

}


    return (

        coffeeItem.allData.length ? <section className="menu py-5">
            <div className="container">
                <Title title='Best of our menu' />
                <div className="row mb-5">
                    {/* set category button */}
                   <div className="col-10 mx-auto text-center">
                       {coffeeItem.categoriesData.map((category,index)=>{
                           return <button key={index} className="btn-yellow text-capitalize m-3" onClick={()=>handleFilter(category)}>
                                {category}
                           </button>
                       })}
                   </div>
                   {/* categories */}
                   {/* layout items */}
                   {coffeeItem.allData.map(item=>{
                       return <div key={item.id} className="col-11 col-md-6 my-3 d-flex mx-auto">
<div className="div">
    <Img fixed={item.image.fixed} />
</div>
    <div className="flex-grow-1 px-3">
         <div className="d-flex justify-content-between">
        <h6 className="mb-0"><small>{item.title}</small></h6>
        <h6 className="mb-0 text-white"><small>${item.price}</small></h6>
    </div>
    <p className="text-muted"><small>{item.description.description}</small></p>

</div>
                       </div>
                   })}
                </div>
            </div>
        </section> 

        :
        
        <section className="menu py-5">
            <div className="container">
                <Title className='Best of our menu' />
                <div className="row">
                    <div className="col-10 col-sm6 mx-auto text-center text-capitalize">
                        <h1>There is no item to display</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}
