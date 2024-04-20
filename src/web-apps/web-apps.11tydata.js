const itemsTreeToBreadcrumbs = require('../_utils/breadcrumbs').itemsTreeToBreadcrumbs;
const calcUrlsInItemsTree = require('../_utils/itemsTree').calcUrlsInItemsTree;
const getItemByUrl = require('../_utils/itemsTree').getItemByUrl;

const pathRoot = '/web-apps';

const apps = calcUrlsInItemsTree(require('./apps.json'), pathRoot);

const prepCurItem = curItem => (curItem ? {
  ...curItem,
  homeUrl: curItem.homeUrl+'?ref=freeter.io',
  pubUrl: curItem.pubUrl ? curItem.pubUrl+'?ref=freeter.io' : '',
  logoUrl: curItem.url + curItem.logo
} : curItem)

module.exports = {
  layout: 'v2_web-apps-page.njk',
  eleventyComputed: {
    breadcrumbs: data => itemsTreeToBreadcrumbs(apps, data.page.url),
    curItem: data => prepCurItem(getItemByUrl(apps, data.page.url)),
    pageImage: data => {
      return data.curItem?.logoUrl || data.pageImage;
    },
    pageTitle: data => {
      return data.curItem?.title || data.pageTitle;
    },
    pageDescription: data => {
      return data.curItem?.metaDescr || data.pageDescription;
    }
  }
}
