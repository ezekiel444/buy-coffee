import React from 'react'
import {graphql}  from 'gatsby'
import BackgrounCover from '../components/BackgrounCover'
import Layout from '../components/Layout'
import Info from '../components/Home/Info'
import Menu from '../components/Home/Menu'

const Index = ({data})=>{
   const {file:{childImageSharp:{fluid}}} = data

return <Layout>
<BackgrounCover image={fluid} title='A Drink with Matomi ☕' styleClass='default-background' />
<Info/>
<Menu data={data.contentful.nodes}/>
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

   contentful:allContentfulCoffeeModel {
    nodes {
      id
      category
      price
      title
      description {
        description
      }
      image {
        fixed(height: 50, width: 50) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
  }
`