import React, { useState } from 'react'
import {Link,} from 'gatsby'
import {FaCartArrowDown} from 'react-icons/fa'
import logo from '../../images/NavIcon.jpg'


const NavItems = {
    // NavCss:'collapse navbar-collapse',
    links:[
        {
            id:1,
            path:"/",
            text:'Home'
        },
        {
            id:2,
            path:"/about",
            text:'About'
        },
    ]
}

export default function Navbar() {
    const [buttonTrue, setButton] = useState(false)



    return (
       <nav className='navbar navbar-expand-sm navbar-light bg-light'>
           <div className="container-fluid">
               <Link to='/' className='navbar-brand'>
                   <img width='50' src={logo} alt="nav-icon"/> 
                   </Link>
        <button className="navbar-toggler" onClick={()=>setButton(!buttonTrue)}>
<span className='navbar-toggler-icon'></span>
        </button>
<div className={`collapse navbar-collapse ${buttonTrue && 'show'}`}>
    <ul className="navbar-nav mx-auto">
        {NavItems.links.map(link=>{
            return <li key={link.id} className='nav-item'>
<Link to={link.path} className='nav-link text-capitalized'> {link.text} </Link>
            </li>
        })}
        <li className="nav-item ml-sm-5">
        <FaCartArrowDown className='cart-icon' />
        </li>
    </ul>
</div>
</div>
       </nav>
    )
}
