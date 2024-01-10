exports.itemsTreeToBreadcrumbs = (items, curItemUrl) => {
  var iterateItems = function (_items, breadcrumbs) {
    var breadcrumbsWNextItem
    for (var i = 0; i < _items.length; i++) {
      const item = _items[i];
      if(item) {
        if (item.url === curItemUrl || _items[i].items) {
          breadcrumbsWNextItem = breadcrumbs.slice()
          breadcrumbsWNextItem.push(_items[i])
          if (_items[i].items) {
            var res = iterateItems(_items[i].items, breadcrumbsWNextItem)
            if (res.length) {
              return res
            }
          } else {
            return breadcrumbsWNextItem
          }
        }
      }
    }
    return []
  }

  return iterateItems(items, [])
}
