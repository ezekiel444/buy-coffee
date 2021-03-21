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
   
  ],
  
  flags: {
    DEV_SSR: false,
  }

};
