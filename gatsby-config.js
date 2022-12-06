module.exports = {
  siteMetadata: {
    title: "",
    titleTemplate: "%s",
    description: "Inner Spirit",
    url: "https://www.innerspiritphoto.com", // No trailing slash allowed!
    siteUrl: "https://www.innerspiritphoto.com",
    image: "/small-sprite.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 10,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://innerspiritphoto.com/graphql`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
