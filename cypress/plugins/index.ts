module.exports = (on, config) => {
  on('task', {
    sitemapLocations() {
      const paths = ["/", "/contact"];
      const locs = paths.map(path => `${config.baseUrl}${path}`);
      return locs;
    }
  })
}