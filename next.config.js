// const withMDX = require("@next/mdx")();

// module.exports = withMDX();

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

// trailingSlash: true,
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
});
