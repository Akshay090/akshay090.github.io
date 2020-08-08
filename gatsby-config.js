module.exports = {
    siteMetadata: {
      name: "Akshay Ashok",
      description: "I'm a Full Stack Developer based in India ",
      keywords: ["tech", "blog", "React", "Gatsby"],
      siteUrl: "https://akshay-ashok.now.sh",
      siteImage: "terminal-open-graph-image.jpg",
      profileImage: ``,
      lang: `en`,
      config: {
        sidebarWidth: 280
      }
    },
    plugins: [
      {
        resolve: "@pauliescanlon/gatsby-theme-terminal",
        options: {
          source: ["posts"]
        }
      }
    ]
  };
  