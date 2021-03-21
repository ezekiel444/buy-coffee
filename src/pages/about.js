import React from 'react'
import {graphql}  from 'gatsby'
import BackgrounCover from '../components/BackgrounCover'
import Layout from '../components/Layout'
// import Info from '../components/Home/Info'

const About = ({data})=>{
   const {file:{childImageSharp:{fluid}}} = data

return <Layout>
<BackgrounCover image={fluid} title='Hello i"m Matomi lucky' styleClass='default-background' />
{/* <Info/> */}
</Layout>

}

export default About


export const query = graphql`
  {
    file(relativePath: {eq: "about-page.jpg"}) {
      childImageSharp {
        fluid {
         ...GatsbyImageSharpFluid
        }
      }
    }
  }
`