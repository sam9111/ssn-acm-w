module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "ssn-acm-w",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-gatsby-cloud",
    "@chakra-ui/gatsby-plugin",
    "gatsby-plugin-wrap-pages",
    {
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint:
          "https://api-ap-northeast-1.graphcms.com/v2/cksfnx5ig0n6l01xvcjga06wr/master",
        downloadLocalImages: true,
      },
    },
  ],
};
