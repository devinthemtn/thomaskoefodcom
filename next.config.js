// const withMDX = require("@next/mdx")();

// module.exports = withMDX();

const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
  extension: /\.md$/,
});

module.exports = withMDX({
  trailingSlash: true,
  pageExtensions: ["js", "jsx", "md", "mdx"],
});
