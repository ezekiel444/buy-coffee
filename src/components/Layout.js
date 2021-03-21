import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from './Globals/Footer'
import Navbar from './Globals/Navbar'


const Layout = ({children})=>{
return <>
<Helmet>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous"/>
</Helmet>
<Navbar/>
    {children}
    <Footer/>
</>
}



export default Layout