const calcUrlsInItemsTree = (items, itemsUrlBase) => items.map(item => {
  const itemUrlBase = itemsUrlBase + '/' + item.item;
  return {
    ...item,
    items: item.items ? calcUrlsInItemsTree (item.items, itemUrlBase) : undefined,
    url: itemUrlBase + '/',
    urlBase: itemUrlBase
  }
})

const getItemByUrl = (items, url) => {
  for (const item of items) {
    if (item.url === url) {
      return item;
    } else if (item.items) {
      const res = getItemByUrl(item.items, url);
      if (res) {
        return res;
      }
    }
  }
  return null;
}

module.exports ={
  calcUrlsInItemsTree,
  getItemByUrl
}
