module.exports = {
  layout: 'v2_blog-page.njk',
  eleventyComputed: {
    intro_25: data => {
      if (data.intro) {
        const arr = data.intro.split(' ');
        const newArr = arr.slice(0, 25);
        return newArr.join(' ') + (newArr.length<arr.length ? '...' : '')
      }
    },
    pageImage: data => data.page.filePathStem!=='/blog/index' ? `${ data.page.url }index.png` : data.pageImage,
    pageTitle: data => data.title || data.pageTitle,
    pageDescription: data => data.description || data.pageDescription,
  }
}
