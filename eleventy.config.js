module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy('src/!(_copy|_data|_includes|_layouts|_js|_styles|_utils)/**/*.{png,gif,jpg,svg}');

  eleventyConfig.setServerOptions({
    liveReload: true,
    domDiff: true,
    port: 8080,
    watch: [],
    showAllHosts: false,
    https: {
      // key: './localhost.key',
      // cert: './localhost.cert',
    },
    encoding: 'utf-8',
    showVersion: false,
  });

  const markdownIt = require('markdown-it');
  const mdOptions = {
    html: true,
    breaks: true,
    linkify: true
  };

  eleventyConfig.setLibrary('md', markdownIt(mdOptions));

  return {
    dir: {
      input: 'src',
      data: '_data',
      includes: '_includes',
      layouts: '_layouts',
      output: 'build'
    },
    templateFormats: ['njk', 'html', 'md'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  }
}
