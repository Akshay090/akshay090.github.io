module.exports = {
  siteMetadata: {
    name: "Akshay Ashok",
    description: "I'm a Full Stack Developer / MERN Stack - GraphQL Developer based in India",
    keywords: ["tech", "blog", "React", "Gatsby"],
    siteUrl: "https://akshay-ashok.now.sh",
    siteImage: "images/akshay-open-graph-image.jpg",
    profileImage: ``,
    lang: `en`,
    config: {
      sidebarWidth: 200,
    },
  },
  plugins: [
    {
      resolve: "@pauliescanlon/gatsby-theme-terminal",
      options: {
        source: ["posts"],
      },
    },
    `@pauliescanlon/gatsby-mdx-embed`,
  ],
};
