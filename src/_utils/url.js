function bustCacheForUrl(url, hash) {
  const [urlPath, urlParams] = url.split('?');
  const params = new URLSearchParams(urlParams || '');
  params.set('v', hash);

  return `${urlPath}?${params}`;
}

module.exports = {
  bustCacheForUrl
}
