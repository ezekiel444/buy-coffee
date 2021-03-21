import React from 'react'
import {graphql}  from 'gatsby'
import BackgrounCover from '../components/BackgrounCover'
import Layout from '../components/Layout'
import Info from '../components/Home/Info'

const Index = ({data})=>{
   const {file:{childImageSharp:{fluid}}} = data

return <Layout>
<BackgrounCover image={fluid} title='A Drink with Matomi ☕' styleClass='default-background' />
<Info/>
</Layout>

}

export default Index


export const query = graphql`
  {
    file(relativePath: {eq: "backgroundImg.jpg"}) {
      childImageSharp {
        fluid {
         ...GatsbyImageSharpFluid
        }
      }
    }
  }
`