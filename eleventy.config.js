module.exports = eleventyConfig => {
  eleventyConfig.setServerOptions({
    liveReload: true,
    domDiff: true,
    port: 8080,
    watch: [],
    showAllHosts: false,
    https: {
      // key: "./localhost.key",
      // cert: "./localhost.cert",
    },
    encoding: "utf-8",
    showVersion: false,
  });

  return {
    dir: { input: 'src', output: 'build' },
    templateFormats: ['njk', 'html'],
    htmlTemplateEngine: 'njk'
  }
}
