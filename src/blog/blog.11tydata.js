module.exports = {
  layout: 'v2_blog-page.njk',
  eleventyComputed: {
    summary_25: data => data.summary && data.summary.split(' ').slice(0, 25).join(' '),
    pageImage: data => data.summary /* is blog post*/ ? `${ data.page.url }index.png` : data.pageImage,
    pageTitle: data => data.title || data.pageTitle,
    pageDescription: data => data.summary ? data.summary.split(' ').slice(0, 25).join(' ') : data.pageDescription,
  }
}
