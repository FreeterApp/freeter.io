module.exports = {
  layout: 'v2_blog-page.njk',
  eleventyComputed: {
    summary_25: data => data.summary && data.summary.split(' ').slice(0, 25).join(' '),
  }
}
