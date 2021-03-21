import React from 'react'
import Image from 'gatsby-image'
// import BackgroundImage from 'gatsby-background-image'


export default function BackgrounCover({image,styleClass,title,children}) {
    return (
        <div className='container containerImg'>
 <Image fluid={image} className={styleClass || 'default-background'} alt='hero-background'/>
<div className='hero-background'>
<h2>{title || 'Default Title'}</h2>
{children}
</div>
       
        </div>
    )
}
