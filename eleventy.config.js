const path = require('path');
const {calcFileHash} = require('./src/_utils/file');
const {bustCacheForUrl} = require('./src/_utils/url');

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
  const markdownItAnchor = require('markdown-it-anchor')
  const mdOptions = {
    html: true,
    breaks: true,
    linkify: true
  };

  eleventyConfig.setLibrary('md', markdownIt(mdOptions).use(markdownItAnchor));

  const hashCache = {};
  eleventyConfig.addFilter('bust', function (url) { // no arrow func here
    const [urlPath] = url.split('?');
    const filePath = path.join('build', urlPath);
    if(!hashCache[filePath]) {
      hashCache[filePath] = calcFileHash(filePath);
    }

    return bustCacheForUrl(url, hashCache[filePath]);
  });

  const pluginTOC = require('eleventy-plugin-toc')
  eleventyConfig.addPlugin(pluginTOC)

  const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);

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
