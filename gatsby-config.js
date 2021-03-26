require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})




module.exports = {
  siteMetadata: {
    title: "coffee_seller",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:"images",
        path: `${__dirname}/src/images/`,
      },
      
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
			resolve: 'gatsby-plugin-snipcart',
			options: {
				apiKey: process.env.SNIPCART_KEY,
        autopop:true

			}
		}
   
  ],
  
  flags: {
    DEV_SSR: false,
  }

};
