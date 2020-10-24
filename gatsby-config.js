const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Burak Cebel - Digital Product Designer`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-78SX6358M3",
        head: false,
        defer: true,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: false,
        id: 2059116,
        sv: 6,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Burak Cebel`,
        short_name: `Burak Cebel`,
        start_url: `/`,
        icon: `src/assets/images/burak.png`,
        background_color: `#18171d`,
        theme_color: `#ffb87a`,
        display: `standalone`,
      },
    },
  ],
}
