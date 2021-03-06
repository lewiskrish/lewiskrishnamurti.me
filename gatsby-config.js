module.exports = {
  siteMetadata: {
    siteUrl: "https://www.lewiskrishnamurti.me",
    title: "Lewis Krishnamurti",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
      },
    },
  ],
};
