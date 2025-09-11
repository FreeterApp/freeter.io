module.exports = {
  layout: 'v2_blog-page.njk',
  eleventyComputed: {
    pageImage: data => data.page.filePathStem!=='/blog/index' ? `${ data.page.url }index.jpg` : data.pageImage,
    pageTitle: data => data.title || data.pageTitle,
    pageDescription: data => data.description || data.pageDescription,
  }
}
