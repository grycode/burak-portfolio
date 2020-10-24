const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Burak Cebel`,
    titleTemplate: "%s",
    description: `I design data-driven products that are both functional and aesthetically appealing.`,
    url: `https://cebel.me`,
    image: "/src/assets/images/burak.png",
    twitterUsername: "@burakcebel",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src/assets`, `images`),
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Inter", "Lora"],
        },
      },
    },
  ],
}
