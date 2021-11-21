const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});
const path = require('path');

module.exports = withMDX({
  images: {
    loader: 'imgix',
    path: '/',
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
});
